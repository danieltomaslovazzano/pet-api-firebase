# Pet Endpoints Test Plan

## Overview
This document outlines the test cases for the pet management endpoints of the Pet API. These endpoints handle creating, reading, updating, and deleting pet records, as well as handling pet-related operations like filtering, sorting, and status updates.

## Test Cases

### 1. Pet Creation
- **Endpoint**: POST /api/pets
- **Test Cases**:
  - Create pet with valid data
  - Create pet with missing required fields
  - Create pet with invalid data types (e.g., age as string)
  - Create pet with unauthorized user
  - Create pet with authorized non-owner user (should succeed)
  - Create pet with valid optional fields (e.g., medical history)

### 2. Pet Retrieval (Single)
- **Endpoint**: GET /api/pets/:id
- **Test Cases**:
  - Retrieve existing pet with valid ID
  - Retrieve pet with invalid ID format
  - Retrieve non-existent pet
  - Retrieve pet as owner
  - Retrieve pet as admin
  - Retrieve pet as unauthorized user

### 3. Pet Listing (Multiple)
- **Endpoint**: GET /api/pets
- **Test Cases**:
  - List all pets (paginated)
  - List pets with filtering (e.g., by species, age, status)
  - List pets with sorting (e.g., by creation date, name)
  - List pets with pagination parameters
  - List pets as admin (should see all)
  - List pets as regular user (should see only owned or public)

### 4. Pet Update
- **Endpoint**: PUT /api/pets/:id
- **Test Cases**:
  - Update pet with valid data
  - Update pet with invalid data
  - Update pet with missing ID
  - Update non-existent pet
  - Update pet as non-owner (should fail)
  - Update pet as admin (should succeed)
  - Update pet status (available, adopted, pending, etc.)

### 5. Pet Deletion
- **Endpoint**: DELETE /api/pets/:id
- **Test Cases**:
  - Delete pet with valid ID
  - Delete pet with invalid ID format
  - Delete non-existent pet
  - Delete pet as non-owner (should fail)
  - Delete pet as admin (should succeed)
  - Verify pet is properly removed from database

### 6. Pet Image Upload
- **Endpoint**: POST /api/pets/:id/images
- **Test Cases**:
  - Upload valid image for pet
  - Upload image with invalid format
  - Upload oversized image
  - Upload image for non-existent pet
  - Upload image as non-owner (should fail)
  - Retrieve pet with image URLs

### 7. Pet Search
- **Endpoint**: GET /api/pets/search
- **Test Cases**:
  - Search pets by name (partial match)
  - Search pets by species
  - Search pets by age range
  - Search pets by status
  - Search with multiple criteria
  - Search with no results
  - Search with pagination

## Test Data Requirements
- Test user accounts (owner and admin)
- Sample pet data covering various species, ages, and statuses
- Sample images for upload tests

## Success Criteria
- All endpoints return correct HTTP status codes
- Response data matches expected format
- Validations work as expected
- Authorization rules are properly enforced
- CRUD operations correctly modify the database
- Pagination, filtering, and sorting work correctly

## Test Environment
- Local development server
- Test database with isolated data
- Firebase storage emulator for image tests

## Reporting
- Test execution results
- Request/response logs
- Error details
- Performance metrics

## Notes
- All authenticated endpoints should be tested with both valid and invalid tokens
- Images should be properly stored in Firebase Storage
- Pet deletion should handle related resources (images, medical records) 