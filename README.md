# Tourism Management System API

A RESTful API for managing tourist attractions, visitors, and reviews. This system helps track various attractions, manage visitor information, and handle visitor reviews and ratings.

## Features

- Manage tourist attractions with details like name, location, and entry fee
- Track visitors and their visited attractions
- Handle visitor reviews and ratings
- Calculate and update attraction ratings automatically
- Get top-rated attractions
- Track visitor activity and review history

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- JSON Web Tokens (for authentication)

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn package manager



## API Endpoints

### Attractions

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/attractions | Get all attractions |
| GET | /api/attractions/:id | Get single attraction |
| GET | /api/attractions/top-rated | Get top 5 rated attractions |
| POST | /api/attractions | Create new attraction |
| PUT | /api/attractions/:id | Update attraction |
| DELETE | /api/attractions/:id | Delete attraction |

### Visitors

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/visitors | Get all visitors |
| GET | /api/visitors/:id | Get single visitor |
| GET | /api/visitors/activity | Get visitors' activity |
| POST | /api/visitors | Create new visitor |
| PUT | /api/visitors/:id | Update visitor |
| PUT | /api/visitors/:id/visit | Add visited attraction |
| DELETE | /api/visitors/:id | Delete visitor |

### Reviews

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/reviews | Get all reviews |
| GET | /api/reviews/:id | Get single review |
| GET | /api/reviews/attraction/:attractionId | Get attraction reviews |
| POST | /api/reviews | Create new review |
| PUT | /api/reviews/:id | Update review |
| DELETE | /api/reviews/:id | Delete review |


## Data Validation

- Attraction entry fee must be non-negative
- Attraction rating must be between 0 and 5
- Visitor email must be unique and valid
- Review score must be between 1 and 5
- Visitors can only review attractions they have visited
- Visitors cannot review the same attraction multiple times

## Error Handling

The API returns appropriate HTTP status codes and error messages:

- 200: Success
- 201: Created
- 400: Bad Request
- 404: Not Found
- 500: Server Error

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Author

Your Name
- GitHub: [@Irtaza64](https://github.com/Irtaza64)
