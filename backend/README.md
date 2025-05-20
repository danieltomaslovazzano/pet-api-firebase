# Pet API

A RESTful API built with Node.js and Express for managing pet reports, organizations, and user interactions. The API supports multi-tenant architecture with organization-based access control.

## Features

- 🔐 Firebase Authentication
- 🏢 Multi-tenant organization support
- 🐾 Pet report management
- 👥 User management
- 💬 Conversation and messaging
- 📱 File upload support
- 🔒 Role-based access control

## Tech Stack

- **Backend**: Node.js, Express
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Firebase Auth
- **File Storage**: Firebase Storage
- **Testing**: Jest, Supertest
- **Documentation**: Markdown, Postman

## Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/pet-api.git
   cd pet-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

Required environment variables:
- `PORT`: Server port (default: 3000)
- `DATABASE_URL`: PostgreSQL connection string
- `FIREBASE_PROJECT_ID`: Firebase project ID
- `FIREBASE_PRIVATE_KEY`: Firebase private key
- `FIREBASE_CLIENT_EMAIL`: Firebase client email

## Project Structure

```
├── config/         # Configuration files
├── controllers/    # Route controllers
├── docs/          # Documentation
├── middlewares/   # Express middlewares
├── models/        # Database models
├── routes/        # API routes
├── services/      # Business logic
├── tests/         # Test files
└── utils/         # Utility functions
```

## Testing

1. Set up test environment:
   ```bash
   cp .env.test.example .env.test
   ```

2. Run tests:
   ```bash
   # Run all tests
   npm test

   # Run tests in watch mode
   npm run test:watch

   # Generate coverage report
   npm run test:coverage
   ```

## API Documentation

For detailed API documentation, see:
- [API Documentation](docs/api/API.md)
- [Postman Collection](postman/PetApp_API_Collection.json)

## Development

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- Firebase project

### Development Workflow
1. Create a feature branch
2. Make your changes
3. Add/update tests
4. Submit a pull request

### Code Style
- Follow ESLint configuration
- Use Prettier for formatting
- Write meaningful commit messages

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the GitHub repository.

*Last updated: May 14, 2024*




