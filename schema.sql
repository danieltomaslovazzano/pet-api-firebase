-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS pet_reports;
USE pet_reports;

-- Create the pets table
CREATE TABLE IF NOT EXISTS pets (
    id CHAR(36) NOT NULL PRIMARY KEY,               -- UUID for each pet
    name VARCHAR(255) NOT NULL,                      -- Pet's name
    species VARCHAR(100) NOT NULL,                   -- e.g., Dog, Cat, Bird
    breed VARCHAR(100),                              -- Breed of the pet
    age INT,                                         -- Age (years or months)
    gender VARCHAR(20),                              -- e.g., Male, Female, Other
    color VARCHAR(50),                               -- Color description
    size VARCHAR(20),                                -- e.g., Small, Medium, Large
    status ENUM('lost', 'found', 'for_adoption', 'adopted') NOT NULL, -- Status of the pet
    description TEXT,                                -- Additional pet details
    location JSON,                                   -- JSON object: latitude, longitude, address
    images JSON,                                     -- JSON array of image URLs
    owner JSON,                                      -- JSON object: owner name and contact
    report JSON,                                     -- JSON object: reportedAt, updatedAt
    adoptionInfo JSON,                               -- JSON object: adoption details
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Auto-generated creation timestamp
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- Auto-updated timestamp
);
