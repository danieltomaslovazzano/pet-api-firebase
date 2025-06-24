/**
 * Cleanup Helper - Automatic resource cleanup
 * Simple resource tracking and cleanup without external dependencies
 */

class CleanupManager {
  constructor() {
    this.resources = [];
    this.api = null; // Will be set by tests
  }

  // Track resource for cleanup
  track(type, id, endpoint = null) {
    this.resources.push({
      type,
      id,
      endpoint: endpoint || this._getDefaultEndpoint(type),
      timestamp: Date.now()
    });
  }

  // Set API client for cleanup operations
  setApiClient(apiClient) {
    this.api = apiClient;
  }

  // Cleanup all tracked resources
  async cleanupAll() {
    const cleanupPromises = [];
    
    // Cleanup in reverse order (LIFO)
    for (let i = this.resources.length - 1; i >= 0; i--) {
      const resource = this.resources[i];
      if (this.api && resource.endpoint) {
        cleanupPromises.push(this._cleanupResource(resource));
      }
    }

    try {
      await Promise.allSettled(cleanupPromises);
    } catch (error) {
      console.warn('Some cleanup operations failed:', error.message);
    }

    // Clear tracking
    this.resources = [];
  }

  // Clean up individual resource
  async _cleanupResource(resource) {
    try {
      await this.api.delete(`${resource.endpoint}/${resource.id}`);
    } catch (error) {
      // Ignore 404s and other expected errors during cleanup
      if (error.response?.status !== 404) {
        console.warn(`Failed to cleanup ${resource.type} ${resource.id}:`, error.message);
      }
    }
  }

  // Get default endpoint for resource type
  _getDefaultEndpoint(type) {
    const endpoints = {
      'user': '/users',
      'organization': '/organizations',
      'pet': '/pets',
      'conversation': '/conversations',
      'message': '/messages'
    };
    
    return endpoints[type] || null;
  }
}

module.exports = {
  CleanupManager
}; 