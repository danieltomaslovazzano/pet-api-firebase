# E2E Test Report: organization-types-tests

**Date:** 6/13/2025  
**Time:** 4:44:27 PM  
**Duration:** 18.07s  
**Tests:** 19 total, 19 passed, 0 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Organization Types E2E Tests Get Organization Types Should get all available organization types | PASSED | 0.65s | Organization Types E2E Tests Get Organization Types Should get all available organization types |
| ✅ Organization Types E2E Tests Get Organization Types Regular user should also get organization types | PASSED | 0.34s | Organization Types E2E Tests Get Organization Types Regular user should also get organization types |
| ✅ Organization Types E2E Tests Get Organization Types Should fail without authentication | PASSED | 0.13s | Organization Types E2E Tests Get Organization Types Should fail without authentication |
| ✅ Organization Types E2E Tests Get Specific Organization Type Should get shelter type information | PASSED | 0.47s | Organization Types E2E Tests Get Specific Organization Type Should get shelter type information |
| ✅ Organization Types E2E Tests Get Specific Organization Type Should fail for invalid organization type | PASSED | 0.47s | Organization Types E2E Tests Get Specific Organization Type Should fail for invalid organization type |
| ✅ Organization Types E2E Tests Get Specific Organization Type Should fail without authentication | PASSED | 0.05s | Organization Types E2E Tests Get Specific Organization Type Should fail without authentication |
| ✅ Organization Types E2E Tests Create Organization with Type Should create shelter organization successfully | PASSED | 0.99s | Organization Types E2E Tests Create Organization with Type Should create shelter organization successfully |
| ✅ Organization Types E2E Tests Create Organization with Type Should create organization with default type when not specified | PASSED | 0.50s | Organization Types E2E Tests Create Organization with Type Should create organization with default type when not specified |
| ✅ Organization Types E2E Tests Create Organization with Type Should fail with invalid organization type | PASSED | 0.47s | Organization Types E2E Tests Create Organization with Type Should fail with invalid organization type |
| ✅ Organization Types E2E Tests Create Organization with Type Should validate required fields for shelter type | PASSED | 0.42s | Organization Types E2E Tests Create Organization with Type Should validate required fields for shelter type |
| ✅ Organization Types E2E Tests Create Organization with Type Should handle empty string type | PASSED | 0.39s | Organization Types E2E Tests Create Organization with Type Should handle empty string type |
| ✅ Organization Types E2E Tests Update Organization Type Should update organization type successfully | PASSED | 0.40s | Organization Types E2E Tests Update Organization Type Should update organization type successfully |
| ✅ Organization Types E2E Tests Update Organization Type Should fail when updating to invalid type | PASSED | 0.40s | Organization Types E2E Tests Update Organization Type Should fail when updating to invalid type |
| ✅ Organization Types E2E Tests Filter Organizations by Type Should filter organizations by shelter type | PASSED | 0.80s | Organization Types E2E Tests Filter Organizations by Type Should filter organizations by shelter type |
| ✅ Organization Types E2E Tests Filter Organizations by Type Should fail with invalid type filter | PASSED | 0.40s | Organization Types E2E Tests Filter Organizations by Type Should fail with invalid type filter |
| ✅ Organization Types E2E Tests Filter Organizations by Type Should return all organizations when no type filter is applied | PASSED | 0.68s | Organization Types E2E Tests Filter Organizations by Type Should return all organizations when no type filter is applied |
| ✅ Organization Types E2E Tests Organization Type Validation Edge Cases Should handle null type | PASSED | 0.41s | Organization Types E2E Tests Organization Type Validation Edge Cases Should handle null type |
| ✅ Organization Types E2E Tests Organization Type Validation Edge Cases Should handle case sensitivity | PASSED | 0.49s | Organization Types E2E Tests Organization Type Validation Edge Cases Should handle case sensitivity |
| ✅ Organization Types E2E Tests Language Support Should support different languages | PASSED | 0.38s | Organization Types E2E Tests Language Support Should support different languages |


---

## Detailed Execution Log

### Test: Organization Types E2E Tests Get Organization Types Should get all available organization types
**Status:** ✅ PASSED  
**Duration:** 0.65s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/types (637.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI1ODQ5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjU4NDksImV4cCI6MTc0OTgyOTQ0OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cf6g__h6KgbGQB29xfQ8uMWbqK1cZbsUOnXWIZtU1xutpFO32zQPxA30CeCoLJGQtBPrYdI2srau7cXB6rgToQb2JWDkhE_HVjNcD1OoOpO3uj8RLLL8HUMmo15t3Yr-I9vCqbeu68KPIU5_HujcEe1_1Oos575UPn0UMlWW9Owa6qodQ-4vj0EfGVKPlQ17DV7AxBMFmMP5xlJHK849TL-DN0KDP3GOOpV0WX3e_9i8ebwciYsSTTLb_ueFy9UCinWsLPljvSin_Y7Pr8XjIdHdz46rSrH7E-THAiDIhOEq-Mh0e8hLVnJsRgnOUuTQcLvHnOPz5JCExU5822Oq8w",
    "Accept-Language": "en"
  }
}
```

**📥 Response:**
```json
{
  "status": 200,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "632",
    "etag": "W/\"278-UiORilSbIWvR31V16xAR6hkoKoU\"",
    "date": "Fri, 13 Jun 2025 14:44:13 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "shelter": {
        "id": "shelter",
        "name": "Protectora de Animales",
        "description": "Organizaciones dedicadas al rescate, cuidado temporal y adopción de mascotas",
        "features": [
          "pet_adoption",
          "pet_rescue",
          "volunteer_management",
          "donation_tracking",
          "medical_records",
          "foster_care_coordination"
        ],
        "permissions": {
          "pets": {
            "create": true,
            "read": true,
            "update": true,
            "delete": true,
            "manage_adoption_status": true
          },
          "adoptions": {
            "process_applications": true,
            "conduct_interviews": true,
            "approve_adoptions": true
          }
        },
        "validation": {
          "requiredFields": [
            "name",
            "email",
            "address",
            "phone"
          ],
          "optionalFields": [
            "description",
            "logo"
          ]
        }
      }
    },
    "language": "en"
  }
}
```

**⏱️ Duration:** 637.8 ms  

</details>


---

### Test: Organization Types E2E Tests Get Organization Types Regular user should also get organization types
**Status:** ✅ PASSED  
**Duration:** 0.34s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/types (332.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNTg1MiwidXNlcl9pZCI6IjVOcjRwTllXd0dNdmJmWG10TkRxYnljV0xyaTIiLCJzdWIiOiI1TnI0cE5ZV3dHTXZiZlhtdE5EcWJ5Y1dMcmkyIiwiaWF0IjoxNzQ5ODI1ODUyLCJleHAiOjE3NDk4Mjk0NTIsImVtYWlsIjoidGVzdC11c2VyLW9yZy10eXBlcy0xNzQ5ODI1ODUwNDYwQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QtdXNlci1vcmctdHlwZXMtMTc0OTgyNTg1MDQ2MEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.GqbNoY09UkO-pVDYtrApwrL6idXpzajbD848XTIBXj1d0Ebvx4_CDduM-6uqUhJ9XF5EU_aD-SRiPWdP5bDOkdu3AktWv-5cPq0e_9081qwu6lTpJCc8z7HzEC6C3jI1-6G3eIwwcnV3CSLXfkBaNhiAXubjPRW7Bh2K2VRGyasuf8fBg7Ji1kPRZVB086qio7QeYUG-avGXzkdLSf5Ii3dSc_JSbPjSgntpQ0NydVcVgz3-z2rxmFC5yi9JQG5x71zmCHvmEpPmT3wsWHxu3_mK5rOY742CKXEL_T_N6uZRfUPf52fu0BvQSNkqWLr-FPi6rdzzQnTvP_Al6fELbQ",
    "Accept-Language": "en"
  }
}
```

**📥 Response:**
```json
{
  "status": 200,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "632",
    "etag": "W/\"278-UiORilSbIWvR31V16xAR6hkoKoU\"",
    "date": "Fri, 13 Jun 2025 14:44:13 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "shelter": {
        "id": "shelter",
        "name": "Protectora de Animales",
        "description": "Organizaciones dedicadas al rescate, cuidado temporal y adopción de mascotas",
        "features": [
          "pet_adoption",
          "pet_rescue",
          "volunteer_management",
          "donation_tracking",
          "medical_records",
          "foster_care_coordination"
        ],
        "permissions": {
          "pets": {
            "create": true,
            "read": true,
            "update": true,
            "delete": true,
            "manage_adoption_status": true
          },
          "adoptions": {
            "process_applications": true,
            "conduct_interviews": true,
            "approve_adoptions": true
          }
        },
        "validation": {
          "requiredFields": [
            "name",
            "email",
            "address",
            "phone"
          ],
          "optionalFields": [
            "description",
            "logo"
          ]
        }
      }
    },
    "language": "en"
  }
}
```

**⏱️ Duration:** 332.7 ms  

</details>


---

### Test: Organization Types E2E Tests Get Organization Types Should fail without authentication
**Status:** ✅ PASSED  
**Duration:** 0.13s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/types (94.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Accept-Language": "en"
  }
}
```

**📥 Response:**
```json
{
  "status": 401,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "114",
    "etag": "W/\"72-lOYZ7mT/xqxGy/iyav5Lv8u3JAE\"",
    "date": "Fri, 13 Jun 2025 14:44:13 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "Token not provided",
    "details": {},
    "messageKey": "auth.token_not_provided",
    "language": "en"
  }
}
```

**⏱️ Duration:** 94.2 ms  
**❌ Error:** Request failed with status code 401  

</details>


---

### Test: Organization Types E2E Tests Get Specific Organization Type Should get shelter type information
**Status:** ✅ PASSED  
**Duration:** 0.47s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/types/shelter (467.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI1ODQ5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjU4NDksImV4cCI6MTc0OTgyOTQ0OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cf6g__h6KgbGQB29xfQ8uMWbqK1cZbsUOnXWIZtU1xutpFO32zQPxA30CeCoLJGQtBPrYdI2srau7cXB6rgToQb2JWDkhE_HVjNcD1OoOpO3uj8RLLL8HUMmo15t3Yr-I9vCqbeu68KPIU5_HujcEe1_1Oos575UPn0UMlWW9Owa6qodQ-4vj0EfGVKPlQ17DV7AxBMFmMP5xlJHK849TL-DN0KDP3GOOpV0WX3e_9i8ebwciYsSTTLb_ueFy9UCinWsLPljvSin_Y7Pr8XjIdHdz46rSrH7E-THAiDIhOEq-Mh0e8hLVnJsRgnOUuTQcLvHnOPz5JCExU5822Oq8w",
    "Accept-Language": "en"
  }
}
```

**📥 Response:**
```json
{
  "status": 200,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "620",
    "etag": "W/\"26c-1iIjVAcq49xx4pyUvtofpkzKn1g\"",
    "date": "Fri, 13 Jun 2025 14:44:14 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "id": "shelter",
      "name": "Protectora de Animales",
      "description": "Organizaciones dedicadas al rescate, cuidado temporal y adopción de mascotas",
      "features": [
        "pet_adoption",
        "pet_rescue",
        "volunteer_management",
        "donation_tracking",
        "medical_records",
        "foster_care_coordination"
      ],
      "permissions": {
        "pets": {
          "create": true,
          "read": true,
          "update": true,
          "delete": true,
          "manage_adoption_status": true
        },
        "adoptions": {
          "process_applications": true,
          "conduct_interviews": true,
          "approve_adoptions": true
        }
      },
      "validation": {
        "requiredFields": [
          "name",
          "email",
          "address",
          "phone"
        ],
        "optionalFields": [
          "description",
          "logo"
        ]
      }
    },
    "language": "en"
  }
}
```

**⏱️ Duration:** 467.9 ms  

</details>


---

### Test: Organization Types E2E Tests Get Specific Organization Type Should fail for invalid organization type
**Status:** ✅ PASSED  
**Duration:** 0.47s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/types/invalid_type (454.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI1ODQ5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjU4NDksImV4cCI6MTc0OTgyOTQ0OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cf6g__h6KgbGQB29xfQ8uMWbqK1cZbsUOnXWIZtU1xutpFO32zQPxA30CeCoLJGQtBPrYdI2srau7cXB6rgToQb2JWDkhE_HVjNcD1OoOpO3uj8RLLL8HUMmo15t3Yr-I9vCqbeu68KPIU5_HujcEe1_1Oos575UPn0UMlWW9Owa6qodQ-4vj0EfGVKPlQ17DV7AxBMFmMP5xlJHK849TL-DN0KDP3GOOpV0WX3e_9i8ebwciYsSTTLb_ueFy9UCinWsLPljvSin_Y7Pr8XjIdHdz46rSrH7E-THAiDIhOEq-Mh0e8hLVnJsRgnOUuTQcLvHnOPz5JCExU5822Oq8w",
    "Accept-Language": "en"
  }
}
```

**📥 Response:**
```json
{
  "status": 400,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "103",
    "etag": "W/\"67-wxid0twlgubWSoZd+MCVK705Ijg\"",
    "date": "Fri, 13 Jun 2025 14:44:14 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Invalid organization type",
    "details": [
      "Invalid organization type. Valid types are: shelter"
    ]
  }
}
```

**⏱️ Duration:** 454.9 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Organization Types E2E Tests Get Specific Organization Type Should fail without authentication
**Status:** ✅ PASSED  
**Duration:** 0.05s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/types/shelter (27.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Accept-Language": "en"
  }
}
```

**📥 Response:**
```json
{
  "status": 401,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "114",
    "etag": "W/\"72-lOYZ7mT/xqxGy/iyav5Lv8u3JAE\"",
    "date": "Fri, 13 Jun 2025 14:44:14 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "Token not provided",
    "details": {},
    "messageKey": "auth.token_not_provided",
    "language": "en"
  }
}
```

**⏱️ Duration:** 27.7 ms  
**❌ Error:** Request failed with status code 401  

</details>


---

### Test: Organization Types E2E Tests Create Organization with Type Should create shelter organization successfully
**Status:** ✅ PASSED  
**Duration:** 0.99s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (990.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI1ODQ5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjU4NDksImV4cCI6MTc0OTgyOTQ0OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cf6g__h6KgbGQB29xfQ8uMWbqK1cZbsUOnXWIZtU1xutpFO32zQPxA30CeCoLJGQtBPrYdI2srau7cXB6rgToQb2JWDkhE_HVjNcD1OoOpO3uj8RLLL8HUMmo15t3Yr-I9vCqbeu68KPIU5_HujcEe1_1Oos575UPn0UMlWW9Owa6qodQ-4vj0EfGVKPlQ17DV7AxBMFmMP5xlJHK849TL-DN0KDP3GOOpV0WX3e_9i8ebwciYsSTTLb_ueFy9UCinWsLPljvSin_Y7Pr8XjIdHdz46rSrH7E-THAiDIhOEq-Mh0e8hLVnJsRgnOUuTQcLvHnOPz5JCExU5822Oq8w",
    "Accept-Language": "en"
  },
  "data": {
    "name": "Test Shelter 1749825854978",
    "type": "shelter",
    "description": "Test shelter for E2E testing",
    "address": "123 Shelter Street",
    "phone": "+1234567890",
    "email": "test-shelter-1749825854978@example.com"
  }
}
```

**📥 Response:**
```json
{
  "status": 201,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "542",
    "etag": "W/\"21e-m8rrdf11qwHdRA0Oh9/jPD3n+l0\"",
    "date": "Fri, 13 Jun 2025 14:44:15 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization created successfully",
    "data": {
      "id": "f76f0620-ae00-4f3a-8c4e-d068cd3dc267",
      "name": "Test Shelter 1749825854978",
      "type": "shelter",
      "description": "Test shelter for E2E testing",
      "logo": null,
      "address": "123 Shelter Street",
      "phone": "+1234567890",
      "email": "test-shelter-1749825854978@example.com",
      "status": "active",
      "defaultLanguage": "en",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-13T14:44:15.421Z",
      "updatedAt": "2025-06-13T14:44:15.421Z"
    },
    "messageKey": "organizations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 990.5 ms  

</details>


---

### Test: Organization Types E2E Tests Create Organization with Type Should create organization with default type when not specified
**Status:** ✅ PASSED  
**Duration:** 0.50s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (493.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI1ODQ5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjU4NDksImV4cCI6MTc0OTgyOTQ0OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cf6g__h6KgbGQB29xfQ8uMWbqK1cZbsUOnXWIZtU1xutpFO32zQPxA30CeCoLJGQtBPrYdI2srau7cXB6rgToQb2JWDkhE_HVjNcD1OoOpO3uj8RLLL8HUMmo15t3Yr-I9vCqbeu68KPIU5_HujcEe1_1Oos575UPn0UMlWW9Owa6qodQ-4vj0EfGVKPlQ17DV7AxBMFmMP5xlJHK849TL-DN0KDP3GOOpV0WX3e_9i8ebwciYsSTTLb_ueFy9UCinWsLPljvSin_Y7Pr8XjIdHdz46rSrH7E-THAiDIhOEq-Mh0e8hLVnJsRgnOUuTQcLvHnOPz5JCExU5822Oq8w",
    "Accept-Language": "en"
  },
  "data": {
    "name": "Default Type Org 1749825855993",
    "description": "Organization without explicit type",
    "email": "default-type-1749825855993@example.com",
    "address": "123 Default Street",
    "phone": "+1234567890"
  }
}
```

**📥 Response:**
```json
{
  "status": 201,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "552",
    "etag": "W/\"228-wPN8fzUUNX+ihSdmHK7PYV2ehGg\"",
    "date": "Fri, 13 Jun 2025 14:44:16 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization created successfully",
    "data": {
      "id": "831e4556-c9f3-4f10-a9db-1eeada026601",
      "name": "Default Type Org 1749825855993",
      "type": "shelter",
      "description": "Organization without explicit type",
      "logo": null,
      "address": "123 Default Street",
      "phone": "+1234567890",
      "email": "default-type-1749825855993@example.com",
      "status": "active",
      "defaultLanguage": "en",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-13T14:44:16.419Z",
      "updatedAt": "2025-06-13T14:44:16.419Z"
    },
    "messageKey": "organizations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 493.6 ms  

</details>


---

### Test: Organization Types E2E Tests Create Organization with Type Should fail with invalid organization type
**Status:** ✅ PASSED  
**Duration:** 0.47s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (450.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI1ODQ5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjU4NDksImV4cCI6MTc0OTgyOTQ0OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cf6g__h6KgbGQB29xfQ8uMWbqK1cZbsUOnXWIZtU1xutpFO32zQPxA30CeCoLJGQtBPrYdI2srau7cXB6rgToQb2JWDkhE_HVjNcD1OoOpO3uj8RLLL8HUMmo15t3Yr-I9vCqbeu68KPIU5_HujcEe1_1Oos575UPn0UMlWW9Owa6qodQ-4vj0EfGVKPlQ17DV7AxBMFmMP5xlJHK849TL-DN0KDP3GOOpV0WX3e_9i8ebwciYsSTTLb_ueFy9UCinWsLPljvSin_Y7Pr8XjIdHdz46rSrH7E-THAiDIhOEq-Mh0e8hLVnJsRgnOUuTQcLvHnOPz5JCExU5822Oq8w",
    "Accept-Language": "en"
  },
  "data": {
    "name": "Invalid Type Organization",
    "type": "invalid_type",
    "description": "This should fail",
    "email": "invalid-type@example.com"
  }
}
```

**📥 Response:**
```json
{
  "status": 400,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "122",
    "etag": "W/\"7a-cv5Moexh9jmlV9a8h361//b+/xg\"",
    "date": "Fri, 13 Jun 2025 14:44:16 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Validation failed",
    "details": [
      {
        "field": "type",
        "message": "Invalid organization type. Valid types are: shelter"
      }
    ]
  }
}
```

**⏱️ Duration:** 450.6 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Organization Types E2E Tests Create Organization with Type Should validate required fields for shelter type
**Status:** ✅ PASSED  
**Duration:** 0.42s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (395.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI1ODQ5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjU4NDksImV4cCI6MTc0OTgyOTQ0OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cf6g__h6KgbGQB29xfQ8uMWbqK1cZbsUOnXWIZtU1xutpFO32zQPxA30CeCoLJGQtBPrYdI2srau7cXB6rgToQb2JWDkhE_HVjNcD1OoOpO3uj8RLLL8HUMmo15t3Yr-I9vCqbeu68KPIU5_HujcEe1_1Oos575UPn0UMlWW9Owa6qodQ-4vj0EfGVKPlQ17DV7AxBMFmMP5xlJHK849TL-DN0KDP3GOOpV0WX3e_9i8ebwciYsSTTLb_ueFy9UCinWsLPljvSin_Y7Pr8XjIdHdz46rSrH7E-THAiDIhOEq-Mh0e8hLVnJsRgnOUuTQcLvHnOPz5JCExU5822Oq8w",
    "Accept-Language": "en"
  },
  "data": {
    "name": "Incomplete Shelter",
    "type": "shelter"
  }
}
```

**📥 Response:**
```json
{
  "status": 400,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "139",
    "etag": "W/\"8b-ovr5h+9XT0nc5NsGRedTYTWaYgo\"",
    "date": "Fri, 13 Jun 2025 14:44:17 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Validation failed",
    "details": [
      {
        "field": "email",
        "message": "Email is required"
      },
      {
        "field": "email",
        "message": "Email must be valid"
      }
    ]
  }
}
```

**⏱️ Duration:** 395.2 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Organization Types E2E Tests Create Organization with Type Should handle empty string type
**Status:** ✅ PASSED  
**Duration:** 0.39s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (382.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI1ODQ5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjU4NDksImV4cCI6MTc0OTgyOTQ0OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cf6g__h6KgbGQB29xfQ8uMWbqK1cZbsUOnXWIZtU1xutpFO32zQPxA30CeCoLJGQtBPrYdI2srau7cXB6rgToQb2JWDkhE_HVjNcD1OoOpO3uj8RLLL8HUMmo15t3Yr-I9vCqbeu68KPIU5_HujcEe1_1Oos575UPn0UMlWW9Owa6qodQ-4vj0EfGVKPlQ17DV7AxBMFmMP5xlJHK849TL-DN0KDP3GOOpV0WX3e_9i8ebwciYsSTTLb_ueFy9UCinWsLPljvSin_Y7Pr8XjIdHdz46rSrH7E-THAiDIhOEq-Mh0e8hLVnJsRgnOUuTQcLvHnOPz5JCExU5822Oq8w"
  },
  "data": {
    "name": "Empty Type Organization",
    "type": "",
    "description": "Organization with empty type",
    "email": "empty-type@example.com",
    "address": "123 Empty Street",
    "phone": "+1234567890"
  }
}
```

**📥 Response:**
```json
{
  "status": 400,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "122",
    "etag": "W/\"7a-cv5Moexh9jmlV9a8h361//b+/xg\"",
    "date": "Fri, 13 Jun 2025 14:44:17 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Validation failed",
    "details": [
      {
        "field": "type",
        "message": "Invalid organization type. Valid types are: shelter"
      }
    ]
  }
}
```

**⏱️ Duration:** 382.4 ms  
**❌ Error:** Request failed with status code 400  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/organizations (552.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI1ODQ5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjU4NDksImV4cCI6MTc0OTgyOTQ0OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cf6g__h6KgbGQB29xfQ8uMWbqK1cZbsUOnXWIZtU1xutpFO32zQPxA30CeCoLJGQtBPrYdI2srau7cXB6rgToQb2JWDkhE_HVjNcD1OoOpO3uj8RLLL8HUMmo15t3Yr-I9vCqbeu68KPIU5_HujcEe1_1Oos575UPn0UMlWW9Owa6qodQ-4vj0EfGVKPlQ17DV7AxBMFmMP5xlJHK849TL-DN0KDP3GOOpV0WX3e_9i8ebwciYsSTTLb_ueFy9UCinWsLPljvSin_Y7Pr8XjIdHdz46rSrH7E-THAiDIhOEq-Mh0e8hLVnJsRgnOUuTQcLvHnOPz5JCExU5822Oq8w"
  },
  "data": {
    "name": "Update Type Test Org 1749825857773",
    "type": "shelter",
    "description": "Organization for type update tests",
    "address": "456 Update Street",
    "phone": "+9876543210",
    "email": "update-type-test-1749825857773@example.com"
  }
}
```

**📥 Response:**
```json
{
  "status": 201,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "559",
    "etag": "W/\"22f-Ey0yHKwLjaAAX6viKdn74bDviTQ\"",
    "date": "Fri, 13 Jun 2025 14:44:18 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization created successfully",
    "data": {
      "id": "28ec945a-167a-4f3a-a0db-75b2a8c5e1f8",
      "name": "Update Type Test Org 1749825857773",
      "type": "shelter",
      "description": "Organization for type update tests",
      "logo": null,
      "address": "456 Update Street",
      "phone": "+9876543210",
      "email": "update-type-test-1749825857773@example.com",
      "status": "active",
      "defaultLanguage": "en",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-13T14:44:18.262Z",
      "updatedAt": "2025-06-13T14:44:18.262Z"
    },
    "messageKey": "organizations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 552.2 ms  

</details>


---

### Test: Organization Types E2E Tests Update Organization Type Should update organization type successfully
**Status:** ✅ PASSED  
**Duration:** 0.40s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/organizations/undefined (394.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI1ODQ5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjU4NDksImV4cCI6MTc0OTgyOTQ0OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cf6g__h6KgbGQB29xfQ8uMWbqK1cZbsUOnXWIZtU1xutpFO32zQPxA30CeCoLJGQtBPrYdI2srau7cXB6rgToQb2JWDkhE_HVjNcD1OoOpO3uj8RLLL8HUMmo15t3Yr-I9vCqbeu68KPIU5_HujcEe1_1Oos575UPn0UMlWW9Owa6qodQ-4vj0EfGVKPlQ17DV7AxBMFmMP5xlJHK849TL-DN0KDP3GOOpV0WX3e_9i8ebwciYsSTTLb_ueFy9UCinWsLPljvSin_Y7Pr8XjIdHdz46rSrH7E-THAiDIhOEq-Mh0e8hLVnJsRgnOUuTQcLvHnOPz5JCExU5822Oq8w"
  },
  "data": {
    "description": "Updated description for shelter"
  }
}
```

**📥 Response:**
```json
{
  "status": 400,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "86",
    "etag": "W/\"56-c65qAc7poUVdeefNsXrlFxfQepU\"",
    "date": "Fri, 13 Jun 2025 14:44:18 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Invalid organization ID",
    "details": [
      "Organization ID must be a valid UUID"
    ]
  }
}
```

**⏱️ Duration:** 394.5 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Organization Types E2E Tests Update Organization Type Should fail when updating to invalid type
**Status:** ✅ PASSED  
**Duration:** 0.40s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/organizations/undefined (390.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI1ODQ5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjU4NDksImV4cCI6MTc0OTgyOTQ0OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cf6g__h6KgbGQB29xfQ8uMWbqK1cZbsUOnXWIZtU1xutpFO32zQPxA30CeCoLJGQtBPrYdI2srau7cXB6rgToQb2JWDkhE_HVjNcD1OoOpO3uj8RLLL8HUMmo15t3Yr-I9vCqbeu68KPIU5_HujcEe1_1Oos575UPn0UMlWW9Owa6qodQ-4vj0EfGVKPlQ17DV7AxBMFmMP5xlJHK849TL-DN0KDP3GOOpV0WX3e_9i8ebwciYsSTTLb_ueFy9UCinWsLPljvSin_Y7Pr8XjIdHdz46rSrH7E-THAiDIhOEq-Mh0e8hLVnJsRgnOUuTQcLvHnOPz5JCExU5822Oq8w"
  },
  "data": {
    "type": "invalid_type"
  }
}
```

**📥 Response:**
```json
{
  "status": 400,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "86",
    "etag": "W/\"56-c65qAc7poUVdeefNsXrlFxfQepU\"",
    "date": "Fri, 13 Jun 2025 14:44:19 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Invalid organization ID",
    "details": [
      "Organization ID must be a valid UUID"
    ]
  }
}
```

**⏱️ Duration:** 390.1 ms  
**❌ Error:** Request failed with status code 400  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/organizations (461.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI1ODQ5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjU4NDksImV4cCI6MTc0OTgyOTQ0OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cf6g__h6KgbGQB29xfQ8uMWbqK1cZbsUOnXWIZtU1xutpFO32zQPxA30CeCoLJGQtBPrYdI2srau7cXB6rgToQb2JWDkhE_HVjNcD1OoOpO3uj8RLLL8HUMmo15t3Yr-I9vCqbeu68KPIU5_HujcEe1_1Oos575UPn0UMlWW9Owa6qodQ-4vj0EfGVKPlQ17DV7AxBMFmMP5xlJHK849TL-DN0KDP3GOOpV0WX3e_9i8ebwciYsSTTLb_ueFy9UCinWsLPljvSin_Y7Pr8XjIdHdz46rSrH7E-THAiDIhOEq-Mh0e8hLVnJsRgnOUuTQcLvHnOPz5JCExU5822Oq8w"
  },
  "data": {
    "name": "Filter Test Shelter 1 1749825859140",
    "type": "shelter",
    "description": "Test shelter 1 for filtering",
    "address": "100 Filter Street",
    "phone": "+1234567890",
    "email": "filter-shelter-0-1749825859140@example.com"
  }
}
```

**📥 Response:**
```json
{
  "status": 201,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "554",
    "etag": "W/\"22a-ENK60KqfVko6q2In0a5pxcp4OjY\"",
    "date": "Fri, 13 Jun 2025 14:44:19 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization created successfully",
    "data": {
      "id": "e3577c17-fc21-4890-a484-2f71a059cb64",
      "name": "Filter Test Shelter 1 1749825859140",
      "type": "shelter",
      "description": "Test shelter 1 for filtering",
      "logo": null,
      "address": "100 Filter Street",
      "phone": "+1234567890",
      "email": "filter-shelter-0-1749825859140@example.com",
      "status": "active",
      "defaultLanguage": "en",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-13T14:44:19.535Z",
      "updatedAt": "2025-06-13T14:44:19.535Z"
    },
    "messageKey": "organizations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 461.4 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/organizations (560.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI1ODQ5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjU4NDksImV4cCI6MTc0OTgyOTQ0OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cf6g__h6KgbGQB29xfQ8uMWbqK1cZbsUOnXWIZtU1xutpFO32zQPxA30CeCoLJGQtBPrYdI2srau7cXB6rgToQb2JWDkhE_HVjNcD1OoOpO3uj8RLLL8HUMmo15t3Yr-I9vCqbeu68KPIU5_HujcEe1_1Oos575UPn0UMlWW9Owa6qodQ-4vj0EfGVKPlQ17DV7AxBMFmMP5xlJHK849TL-DN0KDP3GOOpV0WX3e_9i8ebwciYsSTTLb_ueFy9UCinWsLPljvSin_Y7Pr8XjIdHdz46rSrH7E-THAiDIhOEq-Mh0e8hLVnJsRgnOUuTQcLvHnOPz5JCExU5822Oq8w"
  },
  "data": {
    "name": "Filter Test Shelter 2 1749825859601",
    "type": "shelter",
    "description": "Test shelter 2 for filtering",
    "address": "101 Filter Street",
    "phone": "+1234567891",
    "email": "filter-shelter-1-1749825859601@example.com"
  }
}
```

**📥 Response:**
```json
{
  "status": 201,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "554",
    "etag": "W/\"22a-mUhsom2EOnYyKLztaRRcuUYLvqM\"",
    "date": "Fri, 13 Jun 2025 14:44:20 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization created successfully",
    "data": {
      "id": "2901f07d-08e0-444b-96b1-43b5d9fb4c3d",
      "name": "Filter Test Shelter 2 1749825859601",
      "type": "shelter",
      "description": "Test shelter 2 for filtering",
      "logo": null,
      "address": "101 Filter Street",
      "phone": "+1234567891",
      "email": "filter-shelter-1-1749825859601@example.com",
      "status": "active",
      "defaultLanguage": "en",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-13T14:44:20.089Z",
      "updatedAt": "2025-06-13T14:44:20.089Z"
    },
    "messageKey": "organizations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 560.5 ms  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/organizations (535.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI1ODQ5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjU4NDksImV4cCI6MTc0OTgyOTQ0OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cf6g__h6KgbGQB29xfQ8uMWbqK1cZbsUOnXWIZtU1xutpFO32zQPxA30CeCoLJGQtBPrYdI2srau7cXB6rgToQb2JWDkhE_HVjNcD1OoOpO3uj8RLLL8HUMmo15t3Yr-I9vCqbeu68KPIU5_HujcEe1_1Oos575UPn0UMlWW9Owa6qodQ-4vj0EfGVKPlQ17DV7AxBMFmMP5xlJHK849TL-DN0KDP3GOOpV0WX3e_9i8ebwciYsSTTLb_ueFy9UCinWsLPljvSin_Y7Pr8XjIdHdz46rSrH7E-THAiDIhOEq-Mh0e8hLVnJsRgnOUuTQcLvHnOPz5JCExU5822Oq8w"
  },
  "data": {
    "name": "Filter Test Shelter 3 1749825860161",
    "type": "shelter",
    "description": "Test shelter 3 for filtering",
    "address": "102 Filter Street",
    "phone": "+1234567892",
    "email": "filter-shelter-2-1749825860162@example.com"
  }
}
```

**📥 Response:**
```json
{
  "status": 201,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "554",
    "etag": "W/\"22a-xXEiGR3hjG84bICilRiz01RvEdc\"",
    "date": "Fri, 13 Jun 2025 14:44:20 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization created successfully",
    "data": {
      "id": "0434ae87-a052-4c89-a3eb-bf504ab52088",
      "name": "Filter Test Shelter 3 1749825860161",
      "type": "shelter",
      "description": "Test shelter 3 for filtering",
      "logo": null,
      "address": "102 Filter Street",
      "phone": "+1234567892",
      "email": "filter-shelter-2-1749825860162@example.com",
      "status": "active",
      "defaultLanguage": "en",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-13T14:44:20.632Z",
      "updatedAt": "2025-06-13T14:44:20.632Z"
    },
    "messageKey": "organizations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 535.3 ms  

</details>


---

### Test: Organization Types E2E Tests Filter Organizations by Type Should filter organizations by shelter type
**Status:** ✅ PASSED  
**Duration:** 0.80s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations?type=shelter (795.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI1ODQ5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjU4NDksImV4cCI6MTc0OTgyOTQ0OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cf6g__h6KgbGQB29xfQ8uMWbqK1cZbsUOnXWIZtU1xutpFO32zQPxA30CeCoLJGQtBPrYdI2srau7cXB6rgToQb2JWDkhE_HVjNcD1OoOpO3uj8RLLL8HUMmo15t3Yr-I9vCqbeu68KPIU5_HujcEe1_1Oos575UPn0UMlWW9Owa6qodQ-4vj0EfGVKPlQ17DV7AxBMFmMP5xlJHK849TL-DN0KDP3GOOpV0WX3e_9i8ebwciYsSTTLb_ueFy9UCinWsLPljvSin_Y7Pr8XjIdHdz46rSrH7E-THAiDIhOEq-Mh0e8hLVnJsRgnOUuTQcLvHnOPz5JCExU5822Oq8w"
  }
}
```

**📥 Response:**
```json
{
  "status": 200,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "84980",
    "etag": "W/\"14bf4-FzqP19OiBhwxNIwKl7tc/JzYZnw\"",
    "date": "Fri, 13 Jun 2025 14:44:21 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "5c4b53dc-277f-42cc-b208-44ac6fbaf0f9",
        "name": "Test Org for Memberships 1748380292595",
        "type": "shelter",
        "description": "Organization for membership testing",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "test-org-1748380292595@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T21:11:33.283Z",
        "updatedAt": "2025-05-27T21:11:33.283Z",
        "memberships": [
          {
            "id": "6709d3c7-2a3b-44b1-8df6-cf50aa03a569",
            "userId": "9e4jLRGIJOSQSEIjHTCHdCm5bOl1",
            "organizationId": "5c4b53dc-277f-42cc-b208-44ac6fbaf0f9",
            "role": "member",
            "status": "active",
            "createdAt": "2025-05-27T21:11:35.346Z",
            "updatedAt": "2025-05-27T21:11:35.346Z",
            "user": {
              "id": "9e4jLRGIJOSQSEIjHTCHdCm5bOl1",
              "email": "invite-user-1748380293844@example.com",
              "name": "User to Invite",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T21:11:34.430Z",
              "updatedAt": "2025-05-27T21:11:34.430Z",
              "isSuperAdmin": false
            }
          },
          {
            "id": "26cf7874-7ade-4942-9226-dc93665291a8",
            "userId": "2kzm3MDbOHOkRxcXN3sZgeP987t1",
            "organizationId": "5c4b53dc-277f-42cc-b208-44ac6fbaf0f9",
            "role": "admin",
            "status": "active",
            "createdAt": "2025-05-27T21:11:38.525Z",
            "updatedAt": "2025-05-27T21:11:38.525Z",
            "user": {
              "id": "2kzm3MDbOHOkRxcXN3sZgeP987t1",
              "email": "admin-user-1748380297222@example.com",
              "name": "Admin User",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T21:11:37.718Z",
              "updatedAt": "2025-05-27T21:11:37.718Z",
              "isSuperAdmin": false
            }
          },
          {
            "id": "8c4352c4-4379-4689-ae59-7773d7f0fd3b",
            "userId": "QOxlDcF5Q1cUyj5Me2c39e1C8sj1",
            "organizationId": "5c4b53dc-277f-42cc-b208-44ac6fbaf0f9",
            "role": "manager",
            "status": "active",
            "createdAt": "2025-05-27T21:11:40.037Z",
            "updatedAt": "2025-05-27T21:11:40.037Z",
            "user": {
              "id": "QOxlDcF5Q1cUyj5Me2c39e1C8sj1",
              "email": "manager-user-1748380298581@example.com",
              "name": "Manager User",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T21:11:39.140Z",
              "updatedAt": "2025-05-27T21:11:39.140Z",
              "isSuperAdmin": false
            }
          },
          {
            "id": "c4a0ed2a-42b8-44ae-9932-41ea7c0e0010",
            "userId": "QWEwgiw3xJQKRatGk2c3WqtuHcV2",
            "organizationId": "5c4b53dc-277f-42cc-b208-44ac6fbaf0f9",
            "role": "moderator",
            "status": "active",
            "createdAt": "2025-05-27T21:11:41.760Z",
            "updatedAt": "2025-05-27T21:11:41.760Z",
            "user": {
              "id": "QWEwgiw3xJQKRatGk2c3WqtuHcV2",
              "email": "moderator-user-1748380300099@example.com",
              "name": "Moderator User",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T21:11:40.556Z",
              "updatedAt": "2025-05-27T21:11:40.556Z",
              "isSuperAdmin": false
            }
          },
          {
            "id": "591f1eae-bcee-4dce-9429-895ba426f641",
            "userId": "pWYOXREIeUVMp24IGm0N7hykbd52",
            "organizationId": "5c4b53dc-277f-42cc-b208-44ac6fbaf0f9",
            "role": "volunteer",
            "status": "active",
            "createdAt": "2025-05-27T21:11:43.585Z",
            "updatedAt": "2025-05-27T21:11:43.585Z",
            "user": {
              "id": "pWYOXREIeUVMp24IGm0N7hykbd52",
              "email": "volunteer-user-1748380301817@example.com",
              "name": "Volunteer User",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T21:11:42.417Z",
              "updatedAt": "2025-05-27T21:11:42.417Z",
              "isSuperAdmin": false
            }
          },
          {
            "id": "3b324cbf-fd34-423b-935b-c8e6a7746a0e",
            "userId": "TnmyNpSnS7em9Y2H4qkff7leL5p2",
            "organizationId": "5c4b53dc-277f-42cc-b208-44ac6fbaf0f9",
            "role": "observer",
            "status": "active",
            "createdAt": "2025-05-27T21:11:45.124Z",
            "updatedAt": "2025-05-27T21:11:45.124Z",
            "user": {
              "id": "TnmyNpSnS7em9Y2H4qkff7leL5p2",
              "email": "observer-user-1748380303641@example.com",
              "name": "Observer User",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T21:11:44.129Z",
              "updatedAt": "2025-05-27T21:11:44.129Z",
              "isSuperAdmin": false
            }
          }
        ]
      },
      {
        "id": "82e1e643-95f4-4b33-b726-c7c80fe173f3",
        "name": "OrgA",
        "type": "shelter",
        "description": null,
        "logo": null,
        "address": null,
        "phone": null,
        "email": null,
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": null,
        "createdAt": "2025-05-17T14:21:54.428Z",
        "updatedAt": "2025-05-17T14:21:54.428Z",
        "memberships": [
          {
            "id": "0041dd38-83d6-41b9-b477-cfa0e2ff4bb5",
            "userId": "06maBdjJNiZ1IsgjAodIKi3FwNA2",
            "organizationId": "82e1e643-95f4-4b33-b726-c7c80fe173f3",
            "role": "member",
            "status": "active",
            "createdAt": "2025-05-17T14:21:56.660Z",
            "updatedAt": "2025-05-17T14:21:56.660Z",
            "user": {
              "id": "06maBdjJNiZ1IsgjAodIKi3FwNA2",
              "email": "userA@example.com",
              "name": "pep",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-17T14:21:56.549Z",
              "updatedAt": "2025-05-17T16:13:28.251Z",
              "isSuperAdmin": false
            }
          }
        ]
      },
      {
        "id": "21e0d6a4-077a-4670-9f1a-06ad92ba85e1",
        "name": "OrgB",
        "type": "shelter",
        "description": null,
        "logo": null,
        "address": null,
        "phone": null,
        "email": null,
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": null,
        "createdAt": "2025-05-17T14:21:54.538Z",
        "updatedAt": "2025-05-17T14:21:54.538Z",
        "memberships": [
          {
            "id": "e5e50054-7413-4afb-b07c-d0234f856d66",
            "userId": "o16KsHG4yrcFHBvvVmVwvlOl52i2",
            "organizationId": "21e0d6a4-077a-4670-9f1a-06ad92ba85e1",
            "role": "member",
            "status": "active",
            "createdAt": "2025-05-17T14:21:58.230Z",
            "updatedAt": "2025-05-17T14:21:58.230Z",
            "user": {
              "id": "o16KsHG4yrcFHBvvVmVwvlOl52i2",
              "email": "userB@example.com",
              "name": "paco",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-17T14:21:58.165Z",
              "updatedAt": "2025-05-17T16:13:28.251Z",
              "isSuperAdmin": false
            }
          }
        ]
      },
      {
        "id": "ab351d60-f8ca-461a-afac-5215c39d255f",
        "name": "Test Org",
        "type": "shelter",
        "description": "Test organization",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "testorg@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T10:47:20.259Z",
        "updatedAt": "2025-05-27T10:47:20.259Z",
        "memberships": []
      },
      {
        "id": "6b43a2ec-ee62-4c18-a79c-918df326cdfb",
        "name": "Test Org for Memberships 1748342946011",
        "type": "shelter",
        "description": "Organization for membership testing",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "test-org-1748342946011@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T10:49:06.701Z",
        "updatedAt": "2025-05-27T10:49:06.701Z",
        "memberships": []
      },
      {
        "id": "061750f1-0a0f-4985-96d7-06853aa0c832",
        "name": "Test Org for Memberships 1748343078013",
        "type": "shelter",
        "description": "Organization for membership testing",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "test-org-1748343078013@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T10:51:18.791Z",
        "updatedAt": "2025-05-27T10:51:18.791Z",
        "memberships": [
          {
            "id": "daf7ffe0-591a-405e-9978-fa10e2cda985",
            "userId": "ZnPlhCOtheS4qIf0dwObFMLD9R63",
            "organizationId": "061750f1-0a0f-4985-96d7-06853aa0c832",
            "role": "member",
            "status": "active",
            "createdAt": "2025-05-27T10:51:20.910Z",
            "updatedAt": "2025-05-27T10:51:20.910Z",
            "user": {
              "id": "ZnPlhCOtheS4qIf0dwObFMLD9R63",
              "email": "invite-user-1748343079277@example.com",
              "name": "User to Invite",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T10:51:19.907Z",
              "updatedAt": "2025-05-27T10:51:19.907Z",
              "isSuperAdmin": false
            }
          },
          {
            "id": "4be42ed0-d5be-4088-9535-a9e69048d095",
            "userId": "bPDyewr5SoO38os92UiCXqoK6iU2",
            "organizationId": "061750f1-0a0f-4985-96d7-06853aa0c832",
            "role": "admin",
            "status": "active",
            "createdAt": "2025-05-27T10:51:25.457Z",
            "updatedAt": "2025-05-27T10:51:25.457Z",
            "user": {
              "id": "bPDyewr5SoO38os92UiCXqoK6iU2",
              "email": "admin-user-1748343083400@example.com",
              "name": "Admin User",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T10:51:24.459Z",
              "updatedAt": "2025-05-27T10:51:24.459Z",
              "isSuperAdmin": false
            }
          },
          {
            "id": "e149efc0-1cd6-463f-a8bb-8f058b04c9ac",
            "userId": "K2CxTRq7jOOedSEliBmVL8pr0bJ2",
            "organizationId": "061750f1-0a0f-4985-96d7-06853aa0c832",
            "role": "manager",
            "status": "active",
            "createdAt": "2025-05-27T10:51:27.245Z",
            "updatedAt": "2025-05-27T10:51:27.245Z",
            "user": {
              "id": "K2CxTRq7jOOedSEliBmVL8pr0bJ2",
              "email": "manager-user-1748343085524@example.com",
              "name": "Manager User",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T10:51:26.309Z",
              "updatedAt": "2025-05-27T10:51:26.309Z",
              "isSuperAdmin": false
            }
          },
          {
            "id": "0687df17-c725-4d77-88f6-aff5e40481c5",
            "userId": "r41Z5NtEpFO25hCwmS0GMimwOaF2",
            "organizationId": "061750f1-0a0f-4985-96d7-06853aa0c832",
            "role": "moderator",
            "status": "active",
            "createdAt": "2025-05-27T10:51:29.039Z",
            "updatedAt": "2025-05-27T10:51:29.039Z",
            "user": {
              "id": "r41Z5NtEpFO25hCwmS0GMimwOaF2",
              "email": "moderator-user-1748343087311@example.com",
              "name": "Moderator User",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T10:51:28.146Z",
              "updatedAt": "2025-05-27T10:51:28.146Z",
              "isSuperAdmin": false
            }
          },
          {
            "id": "654c4b8f-36d7-449e-8d44-72d0d0e0b7e4",
            "userId": "bKAwZBrkOMeIGsphamRtYJ14T5G3",
            "organizationId": "061750f1-0a0f-4985-96d7-06853aa0c832",
            "role": "volunteer",
            "status": "active",
            "createdAt": "2025-05-27T10:51:31.145Z",
            "updatedAt": "2025-05-27T10:51:31.145Z",
            "user": {
              "id": "bKAwZBrkOMeIGsphamRtYJ14T5G3",
              "email": "volunteer-user-1748343089106@example.com",
              "name": "Volunteer User",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T10:51:30.095Z",
              "updatedAt": "2025-05-27T10:51:30.095Z",
              "isSuperAdmin": false
            }
          },
          {
            "id": "3d490c66-9891-4b1e-845e-f39e2265da70",
            "userId": "jYmCDSKRnRQm1I6Kmq8PhbYeRqk2",
            "organizationId": "061750f1-0a0f-4985-96d7-06853aa0c832",
            "role": "observer",
            "status": "active",
            "createdAt": "2025-05-27T10:51:32.917Z",
            "updatedAt": "2025-05-27T10:51:32.917Z",
            "user": {
              "id": "jYmCDSKRnRQm1I6Kmq8PhbYeRqk2",
              "email": "observer-user-1748343091213@example.com",
              "name": "Observer User",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T10:51:31.934Z",
              "updatedAt": "2025-05-27T10:51:31.934Z",
              "isSuperAdmin": false
            }
          }
        ]
      },
      {
        "id": "c1727cea-3ddb-4a6f-ab02-4a68ac17aab1",
        "name": "Get Test Org 1748343595557",
        "type": "shelter",
        "description": "Organization for get tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "get-test-org-1748343595557@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T10:59:56.150Z",
        "updatedAt": "2025-05-27T10:59:56.150Z",
        "memberships": []
      },
      {
        "id": "7f4f6e51-38ff-4b0b-a213-a1542f983085",
        "name": "Update Test Org 1748343597386",
        "type": "shelter",
        "description": "Organization for update tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "update-test-org-1748343597386@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T10:59:57.913Z",
        "updatedAt": "2025-05-27T10:59:57.913Z",
        "memberships": []
      },
      {
        "id": "c5b4f2bd-614b-4b38-be18-8f3878544e66",
        "name": "Delete Test Org 1748343599127",
        "type": "shelter",
        "description": "Organization for delete tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "delete-test-org-1748343599127@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T10:59:59.660Z",
        "updatedAt": "2025-05-27T10:59:59.660Z",
        "memberships": []
      },
      {
        "id": "b35d1342-5ecd-44fb-bc9a-5333425223c6",
        "name": "No Delete Perm Org 1748343600313",
        "type": "shelter",
        "description": "Organization for permission test",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "no-delete-perm-org-1748343600313@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T11:00:00.855Z",
        "updatedAt": "2025-05-27T11:00:00.855Z",
        "memberships": []
      },
      {
        "id": "19a316e7-e373-440e-be8f-1e87769f4314",
        "name": "Members Test Org 1748343602329",
        "type": "shelter",
        "description": "Organization for members tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "members-test-org-1748343602329@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T11:00:02.904Z",
        "updatedAt": "2025-05-27T11:00:02.904Z",
        "memberships": []
      },
      {
        "id": "74694883-fb36-4102-957e-521048338188",
        "name": "Org1 1748343607843",
        "type": "shelter",
        "description": "First organization for multitenant test",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "org1-1748343607843@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "yO1W4pz0TWO7nzjCnAeWn6IjSIo1",
        "createdAt": "2025-05-27T11:00:08.454Z",
        "updatedAt": "2025-05-27T11:00:08.454Z",
        "memberships": []
      },
      {
        "id": "13f856e8-c936-4fd2-8cf5-751bc01106c4",
        "name": "Org2 1748343608521",
        "type": "shelter",
        "description": "Second organization for multitenant test",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "org2-1748343608521@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "VeeK8nRScLQc2oQGeGHqrCtKaNI2",
        "createdAt": "2025-05-27T11:00:09.069Z",
        "updatedAt": "2025-05-27T11:00:09.069Z",
        "memberships": []
      },
      {
        "id": "4791d2ab-8c13-4cc0-a7e8-905224fbd2ff",
        "name": "Test Org for Memberships 1748343693654",
        "type": "shelter",
        "description": "Organization for membership testing",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "test-org-1748343693654@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T11:01:34.240Z",
        "updatedAt": "2025-05-27T11:01:34.240Z",
        "memberships": [
          {
            "id": "571d0fdb-c97f-438e-b5b0-69e06dad4f81",
            "userId": "nDnRbSGUnvfgo7QAfXc123Sr1kL2",
            "organizationId": "4791d2ab-8c13-4cc0-a7e8-905224fbd2ff",
            "role": "member",
            "status": "active",
            "createdAt": "2025-05-27T11:01:36.267Z",
            "updatedAt": "2025-05-27T11:01:36.267Z",
            "user": {
              "id": "nDnRbSGUnvfgo7QAfXc123Sr1kL2",
              "email": "invite-user-1748343694360@example.com",
              "name": "User to Invite",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T11:01:35.289Z",
              "updatedAt": "2025-05-27T11:01:35.289Z",
              "isSuperAdmin": false
            }
          },
          {
            "id": "9b98de34-72b3-4f04-b809-4120ed27adb7",
            "userId": "4YHNB5DTwydooES6fELF4Zsd9YF3",
            "organizationId": "4791d2ab-8c13-4cc0-a7e8-905224fbd2ff",
            "role": "admin",
            "status": "active",
            "createdAt": "2025-05-27T11:01:40.996Z",
            "updatedAt": "2025-05-27T11:01:40.996Z",
            "user": {
              "id": "4YHNB5DTwydooES6fELF4Zsd9YF3",
              "email": "admin-user-1748343699052@example.com",
              "name": "Admin User",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T11:01:39.896Z",
              "updatedAt": "2025-05-27T11:01:39.896Z",
              "isSuperAdmin": false
            }
          },
          {
            "id": "41dc7b44-0b8c-49b4-9b1b-b57dcc338879",
            "userId": "UMMSDS3eFaUcrUrFAYKjGI4kP9q2",
            "organizationId": "4791d2ab-8c13-4cc0-a7e8-905224fbd2ff",
            "role": "manager",
            "status": "active",
            "createdAt": "2025-05-27T11:01:42.933Z",
            "updatedAt": "2025-05-27T11:01:42.933Z",
            "user": {
              "id": "UMMSDS3eFaUcrUrFAYKjGI4kP9q2",
              "email": "manager-user-1748343701062@example.com",
              "name": "Manager User",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T11:01:41.942Z",
              "updatedAt": "2025-05-27T11:01:41.942Z",
              "isSuperAdmin": false
            }
          },
          {
            "id": "d0ed1ed9-2852-4703-8d3f-664e3edc4cdc",
            "userId": "Bblg9VybKrhrxk0B2naDjuCMCcv1",
            "organizationId": "4791d2ab-8c13-4cc0-a7e8-905224fbd2ff",
            "role": "moderator",
            "status": "active",
            "createdAt": "2025-05-27T11:01:44.981Z",
            "updatedAt": "2025-05-27T11:01:44.981Z",
            "user": {
              "id": "Bblg9VybKrhrxk0B2naDjuCMCcv1",
              "email": "moderator-user-1748343702997@example.com",
              "name": "Moderator User",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T11:01:43.992Z",
              "updatedAt": "2025-05-27T11:01:43.992Z",
              "isSuperAdmin": false
            }
          },
          {
            "id": "9ad91da6-ae32-44b5-b96f-94fe42b39a27",
            "userId": "BDMF289yRKfWbeZnGoOLffxxhIu1",
            "organizationId": "4791d2ab-8c13-4cc0-a7e8-905224fbd2ff",
            "role": "volunteer",
            "status": "active",
            "createdAt": "2025-05-27T11:01:46.598Z",
            "updatedAt": "2025-05-27T11:01:46.598Z",
            "user": {
              "id": "BDMF289yRKfWbeZnGoOLffxxhIu1",
              "email": "volunteer-user-1748343705044@example.com",
              "name": "Volunteer User",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T11:01:45.668Z",
              "updatedAt": "2025-05-27T11:01:45.668Z",
              "isSuperAdmin": false
            }
          },
          {
            "id": "e4deee94-abac-4e54-875b-e98fa099a443",
            "userId": "yaLc2pfO7AdOQu3gcpMmG3lLDBU2",
            "organizationId": "4791d2ab-8c13-4cc0-a7e8-905224fbd2ff",
            "role": "observer",
            "status": "active",
            "createdAt": "2025-05-27T11:01:48.748Z",
            "updatedAt": "2025-05-27T11:01:48.748Z",
            "user": {
              "id": "yaLc2pfO7AdOQu3gcpMmG3lLDBU2",
              "email": "observer-user-1748343706661@example.com",
              "name": "Observer User",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T11:01:47.805Z",
              "updatedAt": "2025-05-27T11:01:47.805Z",
              "isSuperAdmin": false
            }
          }
        ]
      },
      {
        "id": "a5d1ccb1-0278-459d-8ce7-a1e5b2a7018d",
        "name": "Get Test Org 1748344124522",
        "type": "shelter",
        "description": "Organization for get tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "get-test-org-1748344124522@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T11:08:45.087Z",
        "updatedAt": "2025-05-27T11:08:45.087Z",
        "memberships": []
      },
      {
        "id": "e469a5d0-b6a9-4aaa-b999-bf326a045c9e",
        "name": "Update Test Org 1748344126333",
        "type": "shelter",
        "description": "Organization for update tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "update-test-org-1748344126333@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T11:08:46.883Z",
        "updatedAt": "2025-05-27T11:08:46.883Z",
        "memberships": []
      },
      {
        "id": "a312de65-e2f8-49fd-a0a0-0dc72428476f",
        "name": "Delete Test Org 1748344128046",
        "type": "shelter",
        "description": "Organization for delete tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "delete-test-org-1748344128046@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T11:08:48.567Z",
        "updatedAt": "2025-05-27T11:08:48.567Z",
        "memberships": []
      },
      {
        "id": "0e7fedbc-deed-4680-8875-5530f34de47d",
        "name": "No Delete Perm Org 1748344129198",
        "type": "shelter",
        "description": "Organization for permission test",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "no-delete-perm-org-1748344129198@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T11:08:49.794Z",
        "updatedAt": "2025-05-27T11:08:49.794Z",
        "memberships": []
      },
      {
        "id": "539bf829-0999-488a-8c14-41ef2374201b",
        "name": "Members Test Org 1748344131280",
        "type": "shelter",
        "description": "Organization for members tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "members-test-org-1748344131280@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T11:08:51.847Z",
        "updatedAt": "2025-05-27T11:08:51.847Z",
        "memberships": []
      },
      {
        "id": "89691685-4f53-4103-928b-3aa2d2997e27",
        "name": "Org1 1748344136311",
        "type": "shelter",
        "description": "First organization for multitenant test",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "org1-1748344136311@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "UlJzcBT3r0WGHMQT7NjCJnQ6QDs2",
        "createdAt": "2025-05-27T11:08:56.858Z",
        "updatedAt": "2025-05-27T11:08:56.858Z",
        "memberships": []
      },
      {
        "id": "115bc04b-4aac-40d8-b6d8-268635af9b35",
        "name": "Org2 1748344136931",
        "type": "shelter",
        "description": "Second organization for multitenant test",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "org2-1748344136931@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "CvtOLa3sgBc406d7MQpBpq3w9EL2",
        "createdAt": "2025-05-27T11:08:57.424Z",
        "updatedAt": "2025-05-27T11:08:57.424Z",
        "memberships": []
      },
      {
        "id": "6e1de6ba-2b47-43e8-a782-37fb115c5818",
        "name": "Get Test Org 1748344697404",
        "type": "shelter",
        "description": "Organization for get tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "get-test-org-1748344697404@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T11:18:17.986Z",
        "updatedAt": "2025-05-27T11:18:17.986Z",
        "memberships": []
      },
      {
        "id": "8eaca087-071b-4e85-8e5a-e6aa3032b9b8",
        "name": "Update Test Org 1748344699140",
        "type": "shelter",
        "description": "Organization for update tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "update-test-org-1748344699140@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T11:18:19.731Z",
        "updatedAt": "2025-05-27T11:18:19.731Z",
        "memberships": []
      },
      {
        "id": "54326112-2e61-4aba-a282-f631562b50d7",
        "name": "Conversations Test Org",
        "type": "shelter",
        "description": "Organization for conversation testing",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "conversations-test@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T23:00:03.058Z",
        "updatedAt": "2025-05-27T23:00:03.058Z",
        "memberships": []
      },
      {
        "id": "f11249a2-5483-4195-80a7-30ed47369a6a",
        "name": "Conversations Test Org 2",
        "type": "shelter",
        "description": "Second organization for conversation testing",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "conversations-test2@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T23:00:04.274Z",
        "updatedAt": "2025-05-27T23:00:04.274Z",
        "memberships": []
      },
      {
        "id": "157e5517-6fdc-4227-98d2-a1155eb758fa",
        "name": "Test Organization 1749143312937",
        "type": "shelter",
        "description": "Test organization for E2E testing",
        "logo": null,
        "address": "123 Test Street",
        "phone": "+1234567890",
        "email": "test@organization.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:08:33.431Z",
        "updatedAt": "2025-06-05T17:08:33.431Z",
        "memberships": []
      },
      {
        "id": "7e1889c6-4ce1-4072-ab82-58d5a7927168",
        "name": "User Org 1749143314064",
        "type": "shelter",
        "description": "Organization created by regular user",
        "logo": null,
        "address": "789 User Street",
        "phone": "+1555666777",
        "email": "user-org-1749143314064@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "qSOy1KL02XgUOpT0FOihENnhylx2",
        "createdAt": "2025-06-05T17:08:34.451Z",
        "updatedAt": "2025-06-05T17:08:34.451Z",
        "memberships": []
      },
      {
        "id": "16118130-869e-498d-a5b2-a25cbc184fc9",
        "name": "Explicit Shelter 1749143314521",
        "type": "shelter",
        "description": "Shelter with explicit type",
        "logo": null,
        "address": "456 Shelter Avenue",
        "phone": "+1987654321",
        "email": "explicit-shelter-1749143314521@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:08:35.053Z",
        "updatedAt": "2025-06-05T17:08:35.053Z",
        "memberships": []
      },
      {
        "id": "635c02b3-d67d-4e12-b0da-83172e9e40f9",
        "name": "Delete Test Org 1748344700836",
        "type": "shelter",
        "description": "Organization for delete tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "delete-test-org-1748344700836@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T11:18:21.372Z",
        "updatedAt": "2025-05-27T11:18:21.372Z",
        "memberships": []
      },
      {
        "id": "bd688d7a-9870-4973-a196-a8b856f66e40",
        "name": "No Delete Perm Org 1748344701996",
        "type": "shelter",
        "description": "Organization for permission test",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "no-delete-perm-org-1748344701996@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T11:18:22.499Z",
        "updatedAt": "2025-05-27T11:18:22.499Z",
        "memberships": []
      },
      {
        "id": "fcb7aa59-1684-4c67-bbf2-2f312cfde37b",
        "name": "Members Test Org 1748344703996",
        "type": "shelter",
        "description": "Organization for members tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "members-test-org-1748344703996@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T11:18:24.503Z",
        "updatedAt": "2025-05-27T11:18:24.503Z",
        "memberships": []
      },
      {
        "id": "661782af-a6dc-4ac8-986c-17a209a0cd97",
        "name": "Org1 1748344709123",
        "type": "shelter",
        "description": "First organization for multitenant test",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "org1-1748344709123@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "QIp7byhKKFbc1UhuzhSVxCo53eT2",
        "createdAt": "2025-05-27T11:18:29.667Z",
        "updatedAt": "2025-05-27T11:18:29.667Z",
        "memberships": []
      },
      {
        "id": "a4fb8168-cd3c-491e-bf0c-40f65cea82c3",
        "name": "Org2 1748344709726",
        "type": "shelter",
        "description": "Second organization for multitenant test",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "org2-1748344709726@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "KfxdnbrTTEX0cwYhhS6xFc3Jb602",
        "createdAt": "2025-05-27T11:18:30.195Z",
        "updatedAt": "2025-05-27T11:18:30.195Z",
        "memberships": []
      },
      {
        "id": "bc40281c-24b2-4bd2-8338-1cea5f9ce6a1",
        "name": "Get Test Org 1748345098725",
        "type": "shelter",
        "description": "Organization for get tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "get-test-org-1748345098725@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T11:24:59.203Z",
        "updatedAt": "2025-05-27T11:24:59.203Z",
        "memberships": []
      },
      {
        "id": "9f6a76ec-269c-4ffe-b6b3-3a4abb92e736",
        "name": "Update Test Org 1748345100867",
        "type": "shelter",
        "description": "Organization for update tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "update-test-org-1748345100867@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T11:25:01.349Z",
        "updatedAt": "2025-05-27T11:25:01.349Z",
        "memberships": []
      },
      {
        "id": "32c1c2d1-c495-4eb6-b556-691847eb81c7",
        "name": "Delete Test Org 1748345102474",
        "type": "shelter",
        "description": "Organization for delete tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "delete-test-org-1748345102474@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T11:25:02.962Z",
        "updatedAt": "2025-05-27T11:25:02.962Z",
        "memberships": []
      },
      {
        "id": "ef89b209-b771-4477-a784-832f8176cf2b",
        "name": "No Delete Perm Org 1748345103632",
        "type": "shelter",
        "description": "Organization for permission test",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "no-delete-perm-org-1748345103632@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T11:25:04.131Z",
        "updatedAt": "2025-05-27T11:25:04.131Z",
        "memberships": []
      },
      {
        "id": "fb2a6327-c1b0-4c19-8daa-0e209c8ed540",
        "name": "Members Test Org 1748345105521",
        "type": "shelter",
        "description": "Organization for members tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "members-test-org-1748345105521@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T11:25:06.083Z",
        "updatedAt": "2025-05-27T11:25:06.083Z",
        "memberships": []
      },
      {
        "id": "2db13a9b-bcab-4190-aaa4-f6a17e181e37",
        "name": "Org1 1748345111290",
        "type": "shelter",
        "description": "First organization for multitenant test",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "org1-1748345111290@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "xxMkEYxJhBYpF8aTFF8RxKLY9H63",
        "createdAt": "2025-05-27T11:25:11.808Z",
        "updatedAt": "2025-05-27T11:25:11.808Z",
        "memberships": []
      },
      {
        "id": "26c83c89-ecf9-4536-b807-e4f7c20b7e95",
        "name": "Org2 1748345111872",
        "type": "shelter",
        "description": "Second organization for multitenant test",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "org2-1748345111872@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "ZxecqCzBVwQjz2sahpOauRRUpv33",
        "createdAt": "2025-05-27T11:25:12.422Z",
        "updatedAt": "2025-05-27T11:25:12.422Z",
        "memberships": []
      },
      {
        "id": "0e7b0539-ad61-4ab4-9f50-60f77b7ce177",
        "name": "Debug Test Org",
        "type": "shelter",
        "description": "Debug test",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "debug@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T12:44:04.721Z",
        "updatedAt": "2025-05-27T12:44:04.721Z",
        "memberships": []
      },
      {
        "id": "604ad460-c0d3-4545-b343-bcdac04f8b83",
        "name": "Test Organization 1748350700161",
        "type": "shelter",
        "description": "Test organization for E2E testing",
        "logo": null,
        "address": "123 Test Street",
        "phone": "+1234567890",
        "email": "test@organization.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T12:58:20.859Z",
        "updatedAt": "2025-05-27T12:58:20.859Z",
        "memberships": []
      },
      {
        "id": "f647c561-57b4-44d3-99ce-f1858a2faa68",
        "name": "Test Organization 1748350774505",
        "type": "shelter",
        "description": "Test organization for E2E testing",
        "logo": null,
        "address": "123 Test Street",
        "phone": "+1234567890",
        "email": "test@organization.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T12:59:35.199Z",
        "updatedAt": "2025-05-27T12:59:35.199Z",
        "memberships": []
      },
      {
        "id": "fc3fb3d9-e7f0-4cb1-a32d-2c569b842f96",
        "name": "Test Organization 1748351010958",
        "type": "shelter",
        "description": "Test organization for E2E testing",
        "logo": null,
        "address": "123 Test Street",
        "phone": "+1234567890",
        "email": "test@organization.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T13:03:31.693Z",
        "updatedAt": "2025-05-27T13:03:31.693Z",
        "memberships": []
      },
      {
        "id": "345dd658-c90d-4df2-82cf-1a6deb2da8f8",
        "name": "User Org 1748351012163",
        "type": "shelter",
        "description": "Organization created by regular user",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "user-org-1748351012163@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "lLz9pur7dATte9eeivTYOtHonyJ2",
        "createdAt": "2025-05-27T13:03:32.758Z",
        "updatedAt": "2025-05-27T13:03:32.758Z",
        "memberships": []
      },
      {
        "id": "dcd93901-ef19-4937-8b4f-b398fbad9651",
        "name": "Get Test Org 1748351012955",
        "type": "shelter",
        "description": "Organization for get tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "get-test-org-1748351012955@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T13:03:33.592Z",
        "updatedAt": "2025-05-27T13:03:33.592Z",
        "memberships": []
      },
      {
        "id": "516fd4fc-f8d3-4629-9b98-618d929128b3",
        "name": "Update Test Org 1748351014770",
        "type": "shelter",
        "description": "Organization for update tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "update-test-org-1748351014770@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T13:03:35.388Z",
        "updatedAt": "2025-05-27T13:03:35.388Z",
        "memberships": []
      },
      {
        "id": "8befa0e9-098d-403e-a4d8-8b92294d462c",
        "name": "Delete Test Org 1748351016758",
        "type": "shelter",
        "description": "Organization for delete tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "delete-test-org-1748351016758@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T13:03:37.437Z",
        "updatedAt": "2025-05-27T13:03:37.437Z",
        "memberships": []
      },
      {
        "id": "97d199a0-eab1-4198-a7de-a7afe0ca5c4a",
        "name": "No Delete Perm Org 1748351018088",
        "type": "shelter",
        "description": "Organization for permission test",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "no-delete-perm-org-1748351018088@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T13:03:38.694Z",
        "updatedAt": "2025-05-27T13:03:38.694Z",
        "memberships": []
      },
      {
        "id": "1446a576-63c7-4d0f-84f4-5d1008688ed4",
        "name": "Members Test Org 1748351020177",
        "type": "shelter",
        "description": "Organization for members tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "members-test-org-1748351020177@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T13:03:40.749Z",
        "updatedAt": "2025-05-27T13:03:40.749Z",
        "memberships": []
      },
      {
        "id": "bb398be4-b9b3-4f0f-bde1-bb0e243db9e2",
        "name": "Org1 1748351024778",
        "type": "shelter",
        "description": "First organization for multitenant test",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "org1-1748351024778@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "x9VOQR1OhQW60YVQDj7e3nUiUsA3",
        "createdAt": "2025-05-27T13:03:45.352Z",
        "updatedAt": "2025-05-27T13:03:45.352Z",
        "memberships": []
      },
      {
        "id": "0a1f267f-9aea-4d87-b3f7-e4977b2ea332",
        "name": "Org2 1748351025407",
        "type": "shelter",
        "description": "Second organization for multitenant test",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "org2-1748351025407@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "sSlHyz2uwbTkeYvGEsM2QkbvdtG3",
        "createdAt": "2025-05-27T13:03:45.965Z",
        "updatedAt": "2025-05-27T13:03:45.965Z",
        "memberships": []
      },
      {
        "id": "6db29d0d-a420-4861-9ede-e06d55e9f365",
        "name": "Update Test Org 1748351136093",
        "type": "shelter",
        "description": "Organization for update tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "update-test-org-1748351136093@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T13:05:36.848Z",
        "updatedAt": "2025-05-27T13:05:36.848Z",
        "memberships": []
      },
      {
        "id": "f75aa09e-61d7-4453-bec9-a405e0577174",
        "name": "Update Test Org 1748351541622",
        "type": "shelter",
        "description": "Organization for update tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "update-test-org-1748351541622@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T13:12:22.389Z",
        "updatedAt": "2025-05-27T13:12:22.389Z",
        "memberships": []
      },
      {
        "id": "30a27dd2-68fb-49c8-8721-6b818d1f259d",
        "name": "Test Organization 1748351847195",
        "type": "shelter",
        "description": "Test organization for E2E testing",
        "logo": null,
        "address": "123 Test Street",
        "phone": "+1234567890",
        "email": "test@organization.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T13:17:27.879Z",
        "updatedAt": "2025-05-27T13:17:27.879Z",
        "memberships": []
      },
      {
        "id": "c34662ef-108b-4dc6-a896-98cc7dc90616",
        "name": "User Org 1748351848400",
        "type": "shelter",
        "description": "Organization created by regular user",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "user-org-1748351848400@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "1YWHDGv1EfPJgfYb8JXwuDrwAcG3",
        "createdAt": "2025-05-27T13:17:28.988Z",
        "updatedAt": "2025-05-27T13:17:28.988Z",
        "memberships": []
      },
      {
        "id": "b3c54848-f27a-4707-96c6-fb958478e2d1",
        "name": "Get Test Org 1748351849227",
        "type": "shelter",
        "description": "Organization for get tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "get-test-org-1748351849227@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T13:17:29.753Z",
        "updatedAt": "2025-05-27T13:17:29.753Z",
        "memberships": []
      },
      {
        "id": "d1e35060-53d3-4f1f-9975-822c46f9c10b",
        "name": "Update Test Org 1748351850991",
        "type": "shelter",
        "description": "Organization for update tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "update-test-org-1748351850991@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T13:17:31.512Z",
        "updatedAt": "2025-05-27T13:17:31.512Z",
        "memberships": []
      },
      {
        "id": "e4226839-dfa3-45c3-8a28-f86d86f74c2f",
        "name": "Delete Test Org 1748351852610",
        "type": "shelter",
        "description": "Organization for delete tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "delete-test-org-1748351852610@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T13:17:33.185Z",
        "updatedAt": "2025-05-27T13:17:33.185Z",
        "memberships": []
      },
      {
        "id": "76ff7a48-57da-42e4-bfb1-07dbe7ef7faf",
        "name": "No Delete Perm Org 1748351853782",
        "type": "shelter",
        "description": "Organization for permission test",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "no-delete-perm-org-1748351853782@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T13:17:34.290Z",
        "updatedAt": "2025-05-27T13:17:34.290Z",
        "memberships": []
      },
      {
        "id": "d5d04563-70f7-41d8-af34-5aa5184cf367",
        "name": "Members Test Org 1748351855647",
        "type": "shelter",
        "description": "Organization for members tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "members-test-org-1748351855647@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T13:17:36.255Z",
        "updatedAt": "2025-05-27T13:17:36.255Z",
        "memberships": []
      },
      {
        "id": "f833dc2c-949e-4145-92df-262b8933d030",
        "name": "Org1 1748351860572",
        "type": "shelter",
        "description": "First organization for multitenant test",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "org1-1748351860572@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "lX4RjI4JRAQD2YLopUY9rIMF9Qk1",
        "createdAt": "2025-05-27T13:17:41.170Z",
        "updatedAt": "2025-05-27T13:17:41.170Z",
        "memberships": []
      },
      {
        "id": "b14c3138-a54c-4e66-b96b-f2fc4edf5961",
        "name": "Org2 1748351861256",
        "type": "shelter",
        "description": "Second organization for multitenant test",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "org2-1748351861256@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "dcVYzB70FOP3tbiZSPwzBLakBk92",
        "createdAt": "2025-05-27T13:17:41.782Z",
        "updatedAt": "2025-05-27T13:17:41.782Z",
        "memberships": []
      },
      {
        "id": "57c05447-4dd1-47b9-8c1b-9861f36d27d5",
        "name": "Test Organization 1748376968176",
        "type": "shelter",
        "description": "Test organization for E2E testing",
        "logo": null,
        "address": "123 Test Street",
        "phone": "+1234567890",
        "email": "test@organization.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T20:16:08.844Z",
        "updatedAt": "2025-05-27T20:16:08.844Z",
        "memberships": []
      },
      {
        "id": "e7c9010e-326b-48df-9173-b9138a33ff60",
        "name": "User Org 1748376969480",
        "type": "shelter",
        "description": "Organization created by regular user",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "user-org-1748376969480@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "xpv8yPh2UZRQ4pyZj4OTGO5l0th2",
        "createdAt": "2025-05-27T20:16:10.305Z",
        "updatedAt": "2025-05-27T20:16:10.305Z",
        "memberships": []
      },
      {
        "id": "2d0a4a32-8d9d-42bf-8538-635694bed719",
        "name": "Get Test Org 1748376970499",
        "type": "shelter",
        "description": "Organization for get tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "get-test-org-1748376970499@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T20:16:10.998Z",
        "updatedAt": "2025-05-27T20:16:10.998Z",
        "memberships": []
      },
      {
        "id": "8a50284d-d777-480d-b75d-9c6a5a9120f5",
        "name": "Update Test Org 1748376972236",
        "type": "shelter",
        "description": "Organization for update tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "update-test-org-1748376972236@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T20:16:12.741Z",
        "updatedAt": "2025-05-27T20:16:12.741Z",
        "memberships": []
      },
      {
        "id": "7ed19efd-10eb-4755-a315-bea4bf3abffc",
        "name": "Delete Test Org 1748376973871",
        "type": "shelter",
        "description": "Organization for delete tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "delete-test-org-1748376973871@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T20:16:14.478Z",
        "updatedAt": "2025-05-27T20:16:14.478Z",
        "memberships": []
      },
      {
        "id": "68def88b-679e-40b5-8dc8-17bc4d595161",
        "name": "No Delete Perm Org 1748376975092",
        "type": "shelter",
        "description": "Organization for permission test",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "no-delete-perm-org-1748376975092@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T20:16:15.588Z",
        "updatedAt": "2025-05-27T20:16:15.588Z",
        "memberships": []
      },
      {
        "id": "d18f6a24-b9e6-4b04-8a1b-89142581ef0d",
        "name": "Members Test Org 1748376976916",
        "type": "shelter",
        "description": "Organization for members tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "members-test-org-1748376976916@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T20:16:17.447Z",
        "updatedAt": "2025-05-27T20:16:17.447Z",
        "memberships": []
      },
      {
        "id": "98b62416-8cf0-4b45-a376-0d13cf2de0ff",
        "name": "Org1 1748376981120",
        "type": "shelter",
        "description": "First organization for multitenant test",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "org1-1748376981120@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "xdWbtLhfWdcUhpni4PN38xt4AkA3",
        "createdAt": "2025-05-27T20:16:21.641Z",
        "updatedAt": "2025-05-27T20:16:21.641Z",
        "memberships": []
      },
      {
        "id": "754f65ad-7a27-4be6-8205-433b927f0150",
        "name": "Org2 1748376981698",
        "type": "shelter",
        "description": "Second organization for multitenant test",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "org2-1748376981698@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "CSHCi7NrOAUvUSSmxeDcdPRc49M2",
        "createdAt": "2025-05-27T20:16:22.244Z",
        "updatedAt": "2025-05-27T20:16:22.244Z",
        "memberships": []
      },
      {
        "id": "4c88a983-1598-4ba0-a005-169f63c42f31",
        "name": "Get Test Org 1749143315195",
        "type": "shelter",
        "description": "Organization for get tests",
        "logo": null,
        "address": "321 Get Test Avenue",
        "phone": "+1888999000",
        "email": "get-test-org-1749143315195@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:08:35.715Z",
        "updatedAt": "2025-06-05T17:08:35.715Z",
        "memberships": []
      },
      {
        "id": "d1413462-931e-47ee-a249-715d2290bbdb",
        "name": "Update Test Org 1749143316679",
        "type": "shelter",
        "description": "Organization for update tests",
        "logo": null,
        "address": "456 Update Test Boulevard",
        "phone": "+1777888999",
        "email": "update-test-org-1749143316679@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:08:37.110Z",
        "updatedAt": "2025-06-05T17:08:37.110Z",
        "memberships": []
      },
      {
        "id": "0bdd7c0e-2537-47d2-83c8-5c19f6f2c51a",
        "name": "Delete Test Org 1749143318117",
        "type": "shelter",
        "description": "Organization for delete tests",
        "logo": null,
        "address": "789 Delete Test Street",
        "phone": "+1333444555",
        "email": "delete-test-org-1749143318117@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:08:38.579Z",
        "updatedAt": "2025-06-05T17:08:38.579Z",
        "memberships": []
      },
      {
        "id": "4d452f40-f14e-4d3a-af5e-1f85347c56fc",
        "name": "Test Org for Memberships 1748380117908",
        "type": "shelter",
        "description": "Organization for membership testing",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "test-org-1748380117908@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T21:08:38.558Z",
        "updatedAt": "2025-05-27T21:08:38.558Z",
        "memberships": [
          {
            "id": "f26294f1-8234-4a38-97b9-d15ffb862468",
            "userId": "fhUD8XDGOsgc2eJYSjSC0hV9Xz03",
            "organizationId": "4d452f40-f14e-4d3a-af5e-1f85347c56fc",
            "role": "member",
            "status": "active",
            "createdAt": "2025-05-27T21:08:40.889Z",
            "updatedAt": "2025-05-27T21:08:40.889Z",
            "user": {
              "id": "fhUD8XDGOsgc2eJYSjSC0hV9Xz03",
              "email": "invite-user-1748380119099@example.com",
              "name": "User to Invite",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T21:08:39.836Z",
              "updatedAt": "2025-05-27T21:08:39.836Z",
              "isSuperAdmin": false
            }
          },
          {
            "id": "1132d807-d4b6-41f7-bd2e-08b182d662bb",
            "userId": "XIHXIGt7aARQ2oVAjUorHJkgrV23",
            "organizationId": "4d452f40-f14e-4d3a-af5e-1f85347c56fc",
            "role": "admin",
            "status": "active",
            "createdAt": "2025-05-27T21:08:44.619Z",
            "updatedAt": "2025-05-27T21:08:44.619Z",
            "user": {
              "id": "XIHXIGt7aARQ2oVAjUorHJkgrV23",
              "email": "admin-user-1748380123090@example.com",
              "name": "Admin User",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T21:08:43.584Z",
              "updatedAt": "2025-05-27T21:08:43.584Z",
              "isSuperAdmin": false
            }
          },
          {
            "id": "e88af3ac-8993-4b57-9e24-3ec70bdcad71",
            "userId": "bqnCfE07lJcAeC4UcawP7tzK1QU2",
            "organizationId": "4d452f40-f14e-4d3a-af5e-1f85347c56fc",
            "role": "manager",
            "status": "active",
            "createdAt": "2025-05-27T21:08:46.151Z",
            "updatedAt": "2025-05-27T21:08:46.151Z",
            "user": {
              "id": "bqnCfE07lJcAeC4UcawP7tzK1QU2",
              "email": "manager-user-1748380124683@example.com",
              "name": "Manager User",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T21:08:45.195Z",
              "updatedAt": "2025-05-27T21:08:45.195Z",
              "isSuperAdmin": false
            }
          },
          {
            "id": "4c0bb516-10ef-421a-9289-a07ee70e0a35",
            "userId": "bOuYghLTl1ONfW42d94hGMe7Fsz2",
            "organizationId": "4d452f40-f14e-4d3a-af5e-1f85347c56fc",
            "role": "moderator",
            "status": "active",
            "createdAt": "2025-05-27T21:08:47.786Z",
            "updatedAt": "2025-05-27T21:08:47.786Z",
            "user": {
              "id": "bOuYghLTl1ONfW42d94hGMe7Fsz2",
              "email": "moderator-user-1748380126214@example.com",
              "name": "Moderator User",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T21:08:46.811Z",
              "updatedAt": "2025-05-27T21:08:46.811Z",
              "isSuperAdmin": false
            }
          },
          {
            "id": "bad8e4c0-1046-4faa-b9d0-fda80231fa2b",
            "userId": "bNRkXj6l2oVjvBW9vHfIXWfS9tf2",
            "organizationId": "4d452f40-f14e-4d3a-af5e-1f85347c56fc",
            "role": "volunteer",
            "status": "active",
            "createdAt": "2025-05-27T21:08:49.329Z",
            "updatedAt": "2025-05-27T21:08:49.329Z",
            "user": {
              "id": "bNRkXj6l2oVjvBW9vHfIXWfS9tf2",
              "email": "volunteer-user-1748380127849@example.com",
              "name": "Volunteer User",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T21:08:48.339Z",
              "updatedAt": "2025-05-27T21:08:48.339Z",
              "isSuperAdmin": false
            }
          },
          {
            "id": "55093882-0eba-4452-a65e-6f20f29a2a40",
            "userId": "UM0xVFAbL5QQyTdSfEzSKwKCRVm1",
            "organizationId": "4d452f40-f14e-4d3a-af5e-1f85347c56fc",
            "role": "observer",
            "status": "active",
            "createdAt": "2025-05-27T21:08:51.096Z",
            "updatedAt": "2025-05-27T21:08:51.096Z",
            "user": {
              "id": "UM0xVFAbL5QQyTdSfEzSKwKCRVm1",
              "email": "observer-user-1748380129392@example.com",
              "name": "Observer User",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T21:08:50.085Z",
              "updatedAt": "2025-05-27T21:08:50.085Z",
              "isSuperAdmin": false
            }
          }
        ]
      },
      {
        "id": "95d9587d-b30e-41ee-8181-e6689861bc68",
        "name": "No Delete Perm Org 1749143319202",
        "type": "shelter",
        "description": "Organization for permission test",
        "logo": null,
        "address": "999 Permission Test Lane",
        "phone": "+1666777888",
        "email": "no-delete-perm-org-1749143319202@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:08:39.628Z",
        "updatedAt": "2025-06-05T17:08:39.628Z",
        "memberships": []
      },
      {
        "id": "1c672eec-0125-4f06-944a-a7f6fd44a4b7",
        "name": "Members Test Org 1749143321395",
        "type": "shelter",
        "description": "Organization for members tests",
        "logo": null,
        "address": "111 Members Test Road",
        "phone": "+1222333444",
        "email": "members-test-org-1749143321395@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:08:41.908Z",
        "updatedAt": "2025-06-05T17:08:41.908Z",
        "memberships": []
      },
      {
        "id": "b3028b06-872f-4e34-8a40-6a378ac128ea",
        "name": "Org1 1749143325678",
        "type": "shelter",
        "description": "First organization for multitenant test",
        "logo": null,
        "address": "123 Org1 Street",
        "phone": "+1111222333",
        "email": "org1-1749143325678@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "PxpHhwF0yyPXDZGndpWapajXHqw2",
        "createdAt": "2025-06-05T17:08:46.101Z",
        "updatedAt": "2025-06-05T17:08:46.101Z",
        "memberships": []
      },
      {
        "id": "bc891ea7-c752-48d8-9843-fd7ea8fffb53",
        "name": "Org2 1749143326166",
        "type": "shelter",
        "description": "Second organization for multitenant test",
        "logo": null,
        "address": "456 Org2 Avenue",
        "phone": "+1444555666",
        "email": "org2-1749143326166@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "LjO7Q26DJ3WHnq66vseNnfYpPon2",
        "createdAt": "2025-06-05T17:08:46.612Z",
        "updatedAt": "2025-06-05T17:08:46.612Z",
        "memberships": []
      },
      {
        "id": "7de15f6b-1f68-4bf1-90fc-1002fd0e5903",
        "name": "Test Shelter 1749143343749",
        "type": "shelter",
        "description": "Test shelter for E2E testing",
        "logo": null,
        "address": "123 Shelter Street",
        "phone": "+1234567890",
        "email": "test-shelter-1749143343749@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:09:04.280Z",
        "updatedAt": "2025-06-05T17:09:04.280Z",
        "memberships": []
      },
      {
        "id": "244e9d7b-67ad-4d45-b7f4-fc824a9ef6c0",
        "name": "Default Type Org 1749143344412",
        "type": "shelter",
        "description": "Organization without explicit type",
        "logo": null,
        "address": "123 Default Street",
        "phone": "+1234567890",
        "email": "default-type-1749143344412@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:09:04.861Z",
        "updatedAt": "2025-06-05T17:09:04.861Z",
        "memberships": []
      },
      {
        "id": "60b28092-2321-4956-a8ae-7a6195bda9c6",
        "name": "Empty Type Organization",
        "type": "shelter",
        "description": "Organization with empty type",
        "logo": null,
        "address": "123 Empty Street",
        "phone": "+1234567890",
        "email": "empty-type@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-01T23:18:19.315Z",
        "updatedAt": "2025-06-01T23:18:19.315Z",
        "memberships": []
      },
      {
        "id": "896d092c-0e4b-4325-8f28-0e7da4ec7398",
        "name": "Update Type Test Org 1749143346287",
        "type": "shelter",
        "description": "Organization for type update tests",
        "logo": null,
        "address": "456 Update Street",
        "phone": "+9876543210",
        "email": "update-type-test-1749143346287@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:09:06.657Z",
        "updatedAt": "2025-06-05T17:09:06.657Z",
        "memberships": []
      },
      {
        "id": "0b7581c1-3624-405b-8a04-dd4512d856e4",
        "name": "Filter Test Shelter 1 1749143347460",
        "type": "shelter",
        "description": "Test shelter 1 for filtering",
        "logo": null,
        "address": "100 Filter Street",
        "phone": "+1234567890",
        "email": "filter-shelter-0-1749143347460@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:09:07.840Z",
        "updatedAt": "2025-06-05T17:09:07.840Z",
        "memberships": []
      },
      {
        "id": "f2deed0b-eaab-42bc-98ea-b916804ea6d2",
        "name": "Conversations Test Org",
        "type": "shelter",
        "description": "Organization for conversation testing",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "conversations-test@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T22:54:21.427Z",
        "updatedAt": "2025-05-27T22:54:21.427Z",
        "memberships": [
          {
            "id": "e64b46dc-d38e-4ddb-99a7-5dca4cf72e65",
            "userId": "jjK7dPkMTWW1qM2bVKjoVOFrqxC2",
            "organizationId": "f2deed0b-eaab-42bc-98ea-b916804ea6d2",
            "role": "member",
            "status": "active",
            "createdAt": "2025-05-27T22:54:27.435Z",
            "updatedAt": "2025-05-27T22:54:27.435Z",
            "user": {
              "id": "jjK7dPkMTWW1qM2bVKjoVOFrqxC2",
              "email": "conversations-regular-1748386462765@example.com",
              "name": "Regular User",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T22:54:23.570Z",
              "updatedAt": "2025-05-27T22:54:23.570Z",
              "isSuperAdmin": false
            }
          },
          {
            "id": "f6dc7414-d340-40a6-af8d-bf78cc99a7ae",
            "userId": "aWyJmXr8Vsh6HvxIzqO0lLIDfH22",
            "organizationId": "f2deed0b-eaab-42bc-98ea-b916804ea6d2",
            "role": "moderator",
            "status": "active",
            "createdAt": "2025-05-27T22:54:28.094Z",
            "updatedAt": "2025-05-27T22:54:28.094Z",
            "user": {
              "id": "aWyJmXr8Vsh6HvxIzqO0lLIDfH22",
              "email": "conversations-moderator-1748386464496@example.com",
              "name": "Moderator User",
              "role": "moderator",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T22:54:25.348Z",
              "updatedAt": "2025-05-27T22:54:26.663Z",
              "isSuperAdmin": false
            }
          }
        ]
      },
      {
        "id": "67a112fa-85bf-49cf-a8b6-0dd94cfddded",
        "name": "Conversations Test Org 2",
        "type": "shelter",
        "description": "Second organization for conversation testing",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "conversations-test2@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T22:54:22.687Z",
        "updatedAt": "2025-05-27T22:54:22.687Z",
        "memberships": []
      },
      {
        "id": "16e7ec49-cec9-4e9c-af9f-046768df5815",
        "name": "Test Org for Memberships 1749162524471",
        "type": "shelter",
        "description": "Organization for membership testing",
        "logo": null,
        "address": "123 Membership Test Street",
        "phone": "+1234567890",
        "email": "test-org-1749162524471@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T22:28:45.271Z",
        "updatedAt": "2025-06-05T22:28:45.271Z",
        "memberships": [
          {
            "id": "7bc35a01-648e-402b-8dfe-59bfd2626022",
            "userId": "CzlwHVHB2OVt3tYCxq2RZ6SPRqw1",
            "organizationId": "16e7ec49-cec9-4e9c-af9f-046768df5815",
            "role": "member",
            "status": "active",
            "createdAt": "2025-06-05T22:28:47.489Z",
            "updatedAt": "2025-06-05T22:28:47.489Z",
            "user": {
              "id": "CzlwHVHB2OVt3tYCxq2RZ6SPRqw1",
              "email": "invite-user-1749162525823@example.com",
              "name": "User to Invite",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-06-05T22:28:46.456Z",
              "updatedAt": "2025-06-05T22:28:46.456Z",
              "isSuperAdmin": false
            }
          },
          {
            "id": "6af4aa16-9f33-4f71-8974-29f43dd1d6ea",
            "userId": "I3254DDIoGbL2XLnRlDaqy47j7h1",
            "organizationId": "16e7ec49-cec9-4e9c-af9f-046768df5815",
            "role": "admin",
            "status": "active",
            "createdAt": "2025-06-05T22:28:51.208Z",
            "updatedAt": "2025-06-05T22:28:51.208Z",
            "user": {
              "id": "I3254DDIoGbL2XLnRlDaqy47j7h1",
              "email": "admin-user-1749162529695@example.com",
              "name": "Admin User",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-06-05T22:28:50.196Z",
              "updatedAt": "2025-06-05T22:28:50.196Z",
              "isSuperAdmin": false
            }
          },
          {
            "id": "4209a3ec-6747-4a37-ac56-4ac498bdaba3",
            "userId": "IeQ7YvYJ72gOOE6PldfgfDDT69W2",
            "organizationId": "16e7ec49-cec9-4e9c-af9f-046768df5815",
            "role": "volunteer",
            "status": "active",
            "createdAt": "2025-06-05T22:28:56.165Z",
            "updatedAt": "2025-06-05T22:28:56.165Z",
            "user": {
              "id": "IeQ7YvYJ72gOOE6PldfgfDDT69W2",
              "email": "remove-user-1749162534551@example.com",
              "name": "User for Removal",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-06-05T22:28:55.176Z",
              "updatedAt": "2025-06-05T22:28:55.176Z",
              "isSuperAdmin": false
            }
          }
        ]
      },
      {
        "id": "fa018481-7297-40b2-80dd-0caf8fd97b62",
        "name": "Filter Test Shelter 2 1749143347911",
        "type": "shelter",
        "description": "Test shelter 2 for filtering",
        "logo": null,
        "address": "101 Filter Street",
        "phone": "+1234567891",
        "email": "filter-shelter-1-1749143347911@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:09:08.324Z",
        "updatedAt": "2025-06-05T17:09:08.324Z",
        "memberships": []
      },
      {
        "id": "a0446b39-9fdc-4927-92d1-ebf85ccba4fa",
        "name": "Filter Test Shelter 3 1749143348395",
        "type": "shelter",
        "description": "Test shelter 3 for filtering",
        "logo": null,
        "address": "102 Filter Street",
        "phone": "+1234567892",
        "email": "filter-shelter-2-1749143348395@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:09:08.758Z",
        "updatedAt": "2025-06-05T17:09:08.758Z",
        "memberships": []
      },
      {
        "id": "641d01be-fefb-4554-8b08-a1b0bc64142c",
        "name": "Integration Test Shelter 1749143361016",
        "type": "shelter",
        "description": "Shelter for integration testing",
        "logo": null,
        "address": "789 Integration Street",
        "phone": "+1555123456",
        "email": "integration-shelter-1749143361016@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:09:21.494Z",
        "updatedAt": "2025-06-05T17:09:21.494Z",
        "memberships": []
      },
      {
        "id": "a1278192-3285-4044-a449-26ea13cc1c08",
        "name": "Permissions Test Shelter 1749143362548",
        "type": "shelter",
        "description": "Shelter for permissions testing",
        "logo": null,
        "address": "321 Permissions Ave",
        "phone": "+1555987654",
        "email": "permissions-shelter-1749143362548@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:09:22.978Z",
        "updatedAt": "2025-06-05T17:09:22.978Z",
        "memberships": []
      },
      {
        "id": "5ed41806-9765-470b-8c0c-90175a5ca7cc",
        "name": "Multi Shelter 1 1749143364561",
        "type": "shelter",
        "description": "Shelter 1 for multi-org testing",
        "logo": null,
        "address": "400 Multi Street",
        "phone": "+1555123450",
        "email": "multi-shelter-0-1749143364561@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:09:25.068Z",
        "updatedAt": "2025-06-05T17:09:25.068Z",
        "memberships": []
      },
      {
        "id": "1dc4ac93-e384-4636-9917-9f526348b641",
        "name": "Multi Shelter 2 1749143365133",
        "type": "shelter",
        "description": "Shelter 2 for multi-org testing",
        "logo": null,
        "address": "401 Multi Street",
        "phone": "+1555123451",
        "email": "multi-shelter-1-1749143365133@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:09:25.576Z",
        "updatedAt": "2025-06-05T17:09:25.576Z",
        "memberships": []
      },
      {
        "id": "dc4ce66a-a681-4f13-b630-01462cb0b16a",
        "name": "Multi Shelter 3 1749143365644",
        "type": "shelter",
        "description": "Shelter 3 for multi-org testing",
        "logo": null,
        "address": "402 Multi Street",
        "phone": "+1555123452",
        "email": "multi-shelter-2-1749143365644@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:09:26.253Z",
        "updatedAt": "2025-06-05T17:09:26.253Z",
        "memberships": []
      },
      {
        "id": "53f5b771-5142-44d1-84f3-274689b5f50f",
        "name": "Legacy Org 1749143366330",
        "type": "shelter",
        "description": "Organization created without explicit type",
        "logo": null,
        "address": "123 Legacy Street",
        "phone": "+1555000000",
        "email": "legacy-org-1749143366330@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:09:26.757Z",
        "updatedAt": "2025-06-05T17:09:26.757Z",
        "memberships": []
      },
      {
        "id": "9679a2ee-0eb8-41dc-8812-add00b88cd33",
        "name": "Update Test Org 1749143366824",
        "type": "shelter",
        "description": "Organization for update testing",
        "logo": null,
        "address": "999 Update Ave",
        "phone": "+1555999999",
        "email": "update-test-1749143366824@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:09:27.321Z",
        "updatedAt": "2025-06-05T17:09:27.321Z",
        "memberships": []
      },
      {
        "id": "4100d808-2779-4929-a9de-d8de044f257f",
        "name": "Test Org for Memberships 1749143380463",
        "type": "shelter",
        "description": "Organization for membership testing",
        "logo": null,
        "address": "123 Membership Test Street",
        "phone": "+1234567890",
        "email": "test-org-1749143380463@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:09:40.994Z",
        "updatedAt": "2025-06-05T17:09:40.994Z",
        "memberships": []
      },
      {
        "id": "34986d78-0d1c-455f-9bce-49b381819f90",
        "name": "Other Org 1749143387120",
        "type": "shelter",
        "description": "Other organization for cross-access test",
        "logo": null,
        "address": "789 Other Org Boulevard",
        "phone": "+1122334455",
        "email": "other-org-1749143387120@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "ji8TMXeJ92fLGKJmNlBizZ4hILo1",
        "createdAt": "2025-06-05T17:09:47.459Z",
        "updatedAt": "2025-06-05T17:09:47.459Z",
        "memberships": []
      },
      {
        "id": "3a33c8e4-fbe6-4afc-8b76-97f49816d6fc",
        "name": "Pets Test Organization 1749143402930",
        "type": "shelter",
        "description": "Organization for pets E2E testing",
        "logo": null,
        "address": "123 Pets Test Street",
        "phone": "+1234567890",
        "email": "pets-test-1749143402930@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:10:03.409Z",
        "updatedAt": "2025-06-05T17:10:03.409Z",
        "memberships": []
      },
      {
        "id": "99739b6f-56e4-48cf-8d0b-712e049ff48a",
        "name": "Conversations Test Org",
        "type": "shelter",
        "description": "Organization for conversation testing",
        "logo": null,
        "address": "123 Conversations Test Street",
        "phone": "+1234567890",
        "email": "conversations-test@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:10:17.998Z",
        "updatedAt": "2025-06-05T17:10:17.998Z",
        "memberships": []
      },
      {
        "id": "526cdb66-2066-4c7b-a4ba-1a1d099ec477",
        "name": "Messages Test Org",
        "type": "shelter",
        "description": "Organization for message testing",
        "logo": null,
        "address": "123 Messages Test Street",
        "phone": "+1234567890",
        "email": "messages-test@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:10:23.693Z",
        "updatedAt": "2025-06-05T17:10:23.693Z",
        "memberships": []
      },
      {
        "id": "304e1410-35f6-4964-b726-1f489b21515a",
        "name": "Test Organization 1749143648545",
        "type": "shelter",
        "description": "Test organization for E2E testing",
        "logo": null,
        "address": "123 Test Street",
        "phone": "+1234567890",
        "email": "test@organization.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:14:09.163Z",
        "updatedAt": "2025-06-05T17:14:09.163Z",
        "memberships": []
      },
      {
        "id": "f315c3d0-b516-4dc3-99a7-e356908eba68",
        "name": "User Org 1749143649914",
        "type": "shelter",
        "description": "Organization created by regular user",
        "logo": null,
        "address": "789 User Street",
        "phone": "+1555666777",
        "email": "user-org-1749143649914@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "mVWMMUhaHpXicQOlIYrhVI16zxg1",
        "createdAt": "2025-06-05T17:14:10.255Z",
        "updatedAt": "2025-06-05T17:14:10.255Z",
        "memberships": []
      },
      {
        "id": "799df170-3f22-4872-915a-f7d18df8b6a7",
        "name": "Explicit Shelter 1749143650319",
        "type": "shelter",
        "description": "Shelter with explicit type",
        "logo": null,
        "address": "456 Shelter Avenue",
        "phone": "+1987654321",
        "email": "explicit-shelter-1749143650319@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:14:10.773Z",
        "updatedAt": "2025-06-05T17:14:10.773Z",
        "memberships": []
      },
      {
        "id": "98ff793f-36f8-4d4e-895f-e5696ddb82bf",
        "name": "Get Test Org 1749143650905",
        "type": "shelter",
        "description": "Organization for get tests",
        "logo": null,
        "address": "321 Get Test Avenue",
        "phone": "+1888999000",
        "email": "get-test-org-1749143650905@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:14:11.347Z",
        "updatedAt": "2025-06-05T17:14:11.347Z",
        "memberships": []
      },
      {
        "id": "ab97b17d-35d6-4de0-ae1c-fee439286c7f",
        "name": "Update Test Org 1749143652340",
        "type": "shelter",
        "description": "Organization for update tests",
        "logo": null,
        "address": "456 Update Test Boulevard",
        "phone": "+1777888999",
        "email": "update-test-org-1749143652340@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:14:12.757Z",
        "updatedAt": "2025-06-05T17:14:12.757Z",
        "memberships": []
      },
      {
        "id": "e83bfa94-432e-4dc6-9744-a334f6f7feb4",
        "name": "Delete Test Org 1749143653549",
        "type": "shelter",
        "description": "Organization for delete tests",
        "logo": null,
        "address": "789 Delete Test Street",
        "phone": "+1333444555",
        "email": "delete-test-org-1749143653549@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:14:13.933Z",
        "updatedAt": "2025-06-05T17:14:13.933Z",
        "memberships": []
      },
      {
        "id": "e8d0015d-7399-4868-b878-3436e26623e7",
        "name": "No Delete Perm Org 1749143654387",
        "type": "shelter",
        "description": "Organization for permission test",
        "logo": null,
        "address": "999 Permission Test Lane",
        "phone": "+1666777888",
        "email": "no-delete-perm-org-1749143654387@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:14:14.777Z",
        "updatedAt": "2025-06-05T17:14:14.777Z",
        "memberships": []
      },
      {
        "id": "a364d00c-66cb-450d-972e-a44ec883d715",
        "name": "Members Test Org 1749143656320",
        "type": "shelter",
        "description": "Organization for members tests",
        "logo": null,
        "address": "111 Members Test Road",
        "phone": "+1222333444",
        "email": "members-test-org-1749143656320@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:14:16.765Z",
        "updatedAt": "2025-06-05T17:14:16.765Z",
        "memberships": []
      },
      {
        "id": "ecbb3902-5ecf-4a8c-947d-6f391ded8861",
        "name": "Org1 1749143660120",
        "type": "shelter",
        "description": "First organization for multitenant test",
        "logo": null,
        "address": "123 Org1 Street",
        "phone": "+1111222333",
        "email": "org1-1749143660120@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "UdqGkWMboTSmyQH9IfNrOE8z2oy1",
        "createdAt": "2025-06-05T17:14:20.511Z",
        "updatedAt": "2025-06-05T17:14:20.511Z",
        "memberships": []
      },
      {
        "id": "7c52455f-7685-4f2d-8f5e-a6d7e5a4c6d4",
        "name": "Org2 1749143660571",
        "type": "shelter",
        "description": "Second organization for multitenant test",
        "logo": null,
        "address": "456 Org2 Avenue",
        "phone": "+1444555666",
        "email": "org2-1749143660571@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "FiWTWnJnKgRC2MvB4bxbBigKbw12",
        "createdAt": "2025-06-05T17:14:20.924Z",
        "updatedAt": "2025-06-05T17:14:20.924Z",
        "memberships": []
      },
      {
        "id": "82fb04ad-df76-4481-8183-5e842557c6c3",
        "name": "Test Organization 1749144332381",
        "type": "shelter",
        "description": "Test organization for E2E testing",
        "logo": null,
        "address": "123 Test Street",
        "phone": "+1234567890",
        "email": "test@organization.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:25:32.826Z",
        "updatedAt": "2025-06-05T17:25:32.826Z",
        "memberships": []
      },
      {
        "id": "f5b5ceb6-eae7-4ec7-b47b-7179d8420035",
        "name": "User Org 1749144333718",
        "type": "shelter",
        "description": "Organization created by regular user",
        "logo": null,
        "address": "789 User Street",
        "phone": "+1555666777",
        "email": "user-org-1749144333718@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "lJnTD8jUCBOCYzD4Ee9EWrgwyGc2",
        "createdAt": "2025-06-05T17:25:34.053Z",
        "updatedAt": "2025-06-05T17:25:34.053Z",
        "memberships": []
      },
      {
        "id": "c8585f27-93b1-463d-adf4-f1582d3c4533",
        "name": "Explicit Shelter 1749144334123",
        "type": "shelter",
        "description": "Shelter with explicit type",
        "logo": null,
        "address": "456 Shelter Avenue",
        "phone": "+1987654321",
        "email": "explicit-shelter-1749144334123@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:25:34.550Z",
        "updatedAt": "2025-06-05T17:25:34.550Z",
        "memberships": []
      },
      {
        "id": "7e3fab90-034d-4da1-8f7b-c50f76e84345",
        "name": "Get Test Org 1749144334681",
        "type": "shelter",
        "description": "Organization for get tests",
        "logo": null,
        "address": "321 Get Test Avenue",
        "phone": "+1888999000",
        "email": "get-test-org-1749144334681@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:25:35.227Z",
        "updatedAt": "2025-06-05T17:25:35.227Z",
        "memberships": []
      },
      {
        "id": "79b3dca0-384d-41ba-942c-be61f759d4a4",
        "name": "Update Test Org 1749144336324",
        "type": "shelter",
        "description": "Organization for update tests",
        "logo": null,
        "address": "456 Update Test Boulevard",
        "phone": "+1777888999",
        "email": "update-test-org-1749144336324@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:25:36.829Z",
        "updatedAt": "2025-06-05T17:25:36.829Z",
        "memberships": []
      },
      {
        "id": "de35582f-244e-4b43-9a83-64c776dc8156",
        "name": "Delete Test Org 1749144337829",
        "type": "shelter",
        "description": "Organization for delete tests",
        "logo": null,
        "address": "789 Delete Test Street",
        "phone": "+1333444555",
        "email": "delete-test-org-1749144337829@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:25:38.218Z",
        "updatedAt": "2025-06-05T17:25:38.218Z",
        "memberships": []
      },
      {
        "id": "9d8c248a-1d87-4659-aacc-98b22ac94f79",
        "name": "No Delete Perm Org 1749144338772",
        "type": "shelter",
        "description": "Organization for permission test",
        "logo": null,
        "address": "999 Permission Test Lane",
        "phone": "+1666777888",
        "email": "no-delete-perm-org-1749144338772@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:25:39.179Z",
        "updatedAt": "2025-06-05T17:25:39.179Z",
        "memberships": []
      },
      {
        "id": "5e155c12-75a0-49e6-b946-ed2d3ae15588",
        "name": "Members Test Org 1749144340883",
        "type": "shelter",
        "description": "Organization for members tests",
        "logo": null,
        "address": "111 Members Test Road",
        "phone": "+1222333444",
        "email": "members-test-org-1749144340883@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:25:41.309Z",
        "updatedAt": "2025-06-05T17:25:41.309Z",
        "memberships": []
      },
      {
        "id": "efa4cb45-404a-428d-b4d3-ea88722a1b60",
        "name": "Org1 1749144344750",
        "type": "shelter",
        "description": "First organization for multitenant test",
        "logo": null,
        "address": "123 Org1 Street",
        "phone": "+1111222333",
        "email": "org1-1749144344750@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "mYNBNdlIRgYHMQnPYDXz6ZNkHeJ2",
        "createdAt": "2025-06-05T17:25:45.119Z",
        "updatedAt": "2025-06-05T17:25:45.119Z",
        "memberships": []
      },
      {
        "id": "b94da16c-1389-4a9d-90a7-b4ee99557bf4",
        "name": "Org2 1749144345187",
        "type": "shelter",
        "description": "Second organization for multitenant test",
        "logo": null,
        "address": "456 Org2 Avenue",
        "phone": "+1444555666",
        "email": "org2-1749144345187@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "0Y4qngObjOXPUd4QqezDtCOx6bf2",
        "createdAt": "2025-06-05T17:25:45.533Z",
        "updatedAt": "2025-06-05T17:25:45.533Z",
        "memberships": []
      },
      {
        "id": "66696059-c6cc-4471-8f0e-fe888ea40e4c",
        "name": "Test Organization 1749144501752",
        "type": "shelter",
        "description": "Test organization for E2E testing",
        "logo": null,
        "address": "123 Test Street",
        "phone": "+1234567890",
        "email": "test@organization.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:28:22.439Z",
        "updatedAt": "2025-06-05T17:28:22.439Z",
        "memberships": []
      },
      {
        "id": "303cc2cd-e3ba-410c-a824-fb332b44a1f9",
        "name": "User Org 1749144503382",
        "type": "shelter",
        "description": "Organization created by regular user",
        "logo": null,
        "address": "789 User Street",
        "phone": "+1555666777",
        "email": "user-org-1749144503382@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "lXF3xSQ62VNEiaj1G838M6MBAvr2",
        "createdAt": "2025-06-05T17:28:23.767Z",
        "updatedAt": "2025-06-05T17:28:23.767Z",
        "memberships": []
      },
      {
        "id": "6eea89e5-0ae2-416b-81e9-43581806ef39",
        "name": "Explicit Shelter 1749144503861",
        "type": "shelter",
        "description": "Shelter with explicit type",
        "logo": null,
        "address": "456 Shelter Avenue",
        "phone": "+1987654321",
        "email": "explicit-shelter-1749144503861@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:28:24.703Z",
        "updatedAt": "2025-06-05T17:28:24.703Z",
        "memberships": []
      },
      {
        "id": "d478489b-552c-4cd1-8dc4-5f528f63640d",
        "name": "Get Test Org 1749144504896",
        "type": "shelter",
        "description": "Organization for get tests",
        "logo": null,
        "address": "321 Get Test Avenue",
        "phone": "+1888999000",
        "email": "get-test-org-1749144504896@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:28:25.310Z",
        "updatedAt": "2025-06-05T17:28:25.310Z",
        "memberships": []
      },
      {
        "id": "c8fb0a5d-3be5-47a2-a797-b8f6c732c872",
        "name": "Update Test Org 1749144506378",
        "type": "shelter",
        "description": "Organization for update tests",
        "logo": null,
        "address": "456 Update Test Boulevard",
        "phone": "+1777888999",
        "email": "update-test-org-1749144506378@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:28:27.151Z",
        "updatedAt": "2025-06-05T17:28:27.151Z",
        "memberships": []
      },
      {
        "id": "d25fc7f3-94bb-472c-baf2-b2a7a21df8ae",
        "name": "Delete Test Org 1749144508011",
        "type": "shelter",
        "description": "Organization for delete tests",
        "logo": null,
        "address": "789 Delete Test Street",
        "phone": "+1333444555",
        "email": "delete-test-org-1749144508011@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:28:28.461Z",
        "updatedAt": "2025-06-05T17:28:28.461Z",
        "memberships": []
      },
      {
        "id": "466bf733-de14-414f-9ad9-712eb05fca24",
        "name": "No Delete Perm Org 1749144508937",
        "type": "shelter",
        "description": "Organization for permission test",
        "logo": null,
        "address": "999 Permission Test Lane",
        "phone": "+1666777888",
        "email": "no-delete-perm-org-1749144508937@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:28:29.346Z",
        "updatedAt": "2025-06-05T17:28:29.346Z",
        "memberships": []
      },
      {
        "id": "a254d3a9-0a58-4ad3-a097-b568e215ef9a",
        "name": "Members Test Org 1749144511222",
        "type": "shelter",
        "description": "Organization for members tests",
        "logo": null,
        "address": "111 Members Test Road",
        "phone": "+1222333444",
        "email": "members-test-org-1749144511222@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:28:31.685Z",
        "updatedAt": "2025-06-05T17:28:31.685Z",
        "memberships": []
      },
      {
        "id": "c46cee0b-1393-4827-a1a0-828fc2c573ef",
        "name": "Org1 1749144515119",
        "type": "shelter",
        "description": "First organization for multitenant test",
        "logo": null,
        "address": "123 Org1 Street",
        "phone": "+1111222333",
        "email": "org1-1749144515119@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "xM0y1cmThaXjmzkN6iHdWmiBIMD2",
        "createdAt": "2025-06-05T17:28:35.460Z",
        "updatedAt": "2025-06-05T17:28:35.460Z",
        "memberships": []
      },
      {
        "id": "ee1acd61-83b7-499a-a5b0-8d74cdf14bc3",
        "name": "Org2 1749144515524",
        "type": "shelter",
        "description": "Second organization for multitenant test",
        "logo": null,
        "address": "456 Org2 Avenue",
        "phone": "+1444555666",
        "email": "org2-1749144515524@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "sqPCSAeyUYSTfqt60ITodTdXGQL2",
        "createdAt": "2025-06-05T17:28:35.887Z",
        "updatedAt": "2025-06-05T17:28:35.887Z",
        "memberships": []
      },
      {
        "id": "9c4868c2-8296-4717-93c0-e1f5752c50b9",
        "name": "Conversations Test Org",
        "type": "shelter",
        "description": "Organization for conversation testing",
        "logo": null,
        "address": "123 Conversations Test Street",
        "phone": "+1234567890",
        "email": "conversations-test@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T18:18:15.872Z",
        "updatedAt": "2025-06-05T18:18:15.872Z",
        "memberships": []
      },
      {
        "id": "751ec56e-562e-4a7d-86a6-b03572349b08",
        "name": "Get Test Org 1749144827698",
        "type": "shelter",
        "description": "Organization for get tests",
        "logo": null,
        "address": "321 Get Test Avenue",
        "phone": "+1888999000",
        "email": "get-test-org-1749144827698@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:33:48.124Z",
        "updatedAt": "2025-06-05T17:33:48.124Z",
        "memberships": []
      },
      {
        "id": "5775e643-a597-4432-8bb5-637d8e741a4c",
        "name": "Update Test Org 1749144829323",
        "type": "shelter",
        "description": "Organization for update tests",
        "logo": null,
        "address": "456 Update Test Boulevard",
        "phone": "+1777888999",
        "email": "update-test-org-1749144829323@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:33:49.752Z",
        "updatedAt": "2025-06-05T17:33:49.752Z",
        "memberships": []
      },
      {
        "id": "33214533-d0c5-44d0-8c8d-bfb51a58eac2",
        "name": "Delete Test Org 1749144830794",
        "type": "shelter",
        "description": "Organization for delete tests",
        "logo": null,
        "address": "789 Delete Test Street",
        "phone": "+1333444555",
        "email": "delete-test-org-1749144830794@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:33:51.257Z",
        "updatedAt": "2025-06-05T17:33:51.257Z",
        "memberships": []
      },
      {
        "id": "fac8c130-dbd9-4ef0-a613-b1052fc9e69a",
        "name": "No Delete Perm Org 1749144831765",
        "type": "shelter",
        "description": "Organization for permission test",
        "logo": null,
        "address": "999 Permission Test Lane",
        "phone": "+1666777888",
        "email": "no-delete-perm-org-1749144831765@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:33:52.281Z",
        "updatedAt": "2025-06-05T17:33:52.281Z",
        "memberships": []
      },
      {
        "id": "8b1490be-8ab6-44d8-a44c-70a92e61637e",
        "name": "Members Test Org 1749144833953",
        "type": "shelter",
        "description": "Organization for members tests",
        "logo": null,
        "address": "111 Members Test Road",
        "phone": "+1222333444",
        "email": "members-test-org-1749144833953@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:33:54.441Z",
        "updatedAt": "2025-06-05T17:33:54.441Z",
        "memberships": []
      },
      {
        "id": "eaed725e-0d29-4d72-8600-be50eb526ce7",
        "name": "Org1 1749144838005",
        "type": "shelter",
        "description": "First organization for multitenant test",
        "logo": null,
        "address": "123 Org1 Street",
        "phone": "+1111222333",
        "email": "org1-1749144838005@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "HalBFr1YmTcpamJOfvV02pKcB9B2",
        "createdAt": "2025-06-05T17:33:58.369Z",
        "updatedAt": "2025-06-05T17:33:58.369Z",
        "memberships": []
      },
      {
        "id": "f97355e3-b6c5-4aef-8b05-412d0abe4f4a",
        "name": "Org2 1749144838437",
        "type": "shelter",
        "description": "Second organization for multitenant test",
        "logo": null,
        "address": "456 Org2 Avenue",
        "phone": "+1444555666",
        "email": "org2-1749144838437@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "QxN7048RFHTPrvuABxCY9i82wOk1",
        "createdAt": "2025-06-05T17:33:58.933Z",
        "updatedAt": "2025-06-05T17:33:58.933Z",
        "memberships": []
      },
      {
        "id": "70a5421b-e81f-430c-8b12-bc0ec6967645",
        "name": "No Delete Perm Org 1749145109850",
        "type": "shelter",
        "description": "Organization for permission test",
        "logo": null,
        "address": "999 Permission Test Lane",
        "phone": "+1666777888",
        "email": "no-delete-perm-org-1749145109850@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:38:30.284Z",
        "updatedAt": "2025-06-05T17:38:30.284Z",
        "memberships": []
      },
      {
        "id": "38f2e679-f312-48b5-8e14-82be2045ae0b",
        "name": "Test Org for Memberships 1749162435195",
        "type": "shelter",
        "description": "Organization for membership testing",
        "logo": null,
        "address": "123 Membership Test Street",
        "phone": "+1234567890",
        "email": "test-org-1749162435195@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T22:27:15.929Z",
        "updatedAt": "2025-06-05T22:27:15.929Z",
        "memberships": []
      },
      {
        "id": "1fcac7b9-1794-4f18-a619-74c0db02d9de",
        "name": "Other Org 1749162443665",
        "type": "shelter",
        "description": "Other organization for cross-access test",
        "logo": null,
        "address": "789 Other Org Boulevard",
        "phone": "+1122334455",
        "email": "other-org-1749162443665@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "KBs5vlhSJzLnfOzjXPU3XFNGQ1q1",
        "createdAt": "2025-06-05T22:27:24.241Z",
        "updatedAt": "2025-06-05T22:27:24.241Z",
        "memberships": []
      },
      {
        "id": "ddfbe280-888f-4bd1-9b2f-7d4e1ef49503",
        "name": "Test Shelter 1749824334786",
        "type": "shelter",
        "description": "Test shelter for E2E testing",
        "logo": null,
        "address": "123 Shelter Street",
        "phone": "+1234567890",
        "email": "test-shelter-1749824334786@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-13T14:18:55.226Z",
        "updatedAt": "2025-06-13T14:18:55.226Z",
        "memberships": []
      },
      {
        "id": "ac407d6b-1710-4492-9730-0d10c856c928",
        "name": "Default Type Org 1749824335914",
        "type": "shelter",
        "description": "Organization without explicit type",
        "logo": null,
        "address": "123 Default Street",
        "phone": "+1234567890",
        "email": "default-type-1749824335914@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-13T14:18:56.438Z",
        "updatedAt": "2025-06-13T14:18:56.438Z",
        "memberships": []
      },
      {
        "id": "ee475662-d482-4d7a-9256-4feeb52294da",
        "name": "Update Type Test Org 1749824337838",
        "type": "shelter",
        "description": "Organization for type update tests",
        "logo": null,
        "address": "456 Update Street",
        "phone": "+9876543210",
        "email": "update-type-test-1749824337838@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-13T14:18:58.190Z",
        "updatedAt": "2025-06-13T14:18:58.190Z",
        "memberships": []
      },
      {
        "id": "bf643300-8995-4d78-9b52-33b3f5aa4186",
        "name": "Filter Test Shelter 1 1749824339118",
        "type": "shelter",
        "description": "Test shelter 1 for filtering",
        "logo": null,
        "address": "100 Filter Street",
        "phone": "+1234567890",
        "email": "filter-shelter-0-1749824339118@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-13T14:18:59.513Z",
        "updatedAt": "2025-06-13T14:18:59.513Z",
        "memberships": []
      },
      {
        "id": "a58fb8f2-ed59-497a-b0de-0aad82b35594",
        "name": "Filter Test Shelter 2 1749824339609",
        "type": "shelter",
        "description": "Test shelter 2 for filtering",
        "logo": null,
        "address": "101 Filter Street",
        "phone": "+1234567891",
        "email": "filter-shelter-1-1749824339609@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-13T14:19:00.086Z",
        "updatedAt": "2025-06-13T14:19:00.086Z",
        "memberships": []
      },
      {
        "id": "a52f6896-dc20-48a6-bde0-f76a9cd242bc",
        "name": "Filter Test Shelter 3 1749824340156",
        "type": "shelter",
        "description": "Test shelter 3 for filtering",
        "logo": null,
        "address": "102 Filter Street",
        "phone": "+1234567892",
        "email": "filter-shelter-2-1749824340156@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-13T14:19:00.524Z",
        "updatedAt": "2025-06-13T14:19:00.524Z",
        "memberships": []
      },
      {
        "id": "f76f0620-ae00-4f3a-8c4e-d068cd3dc267",
        "name": "Test Shelter 1749825854978",
        "type": "shelter",
        "description": "Test shelter for E2E testing",
        "logo": null,
        "address": "123 Shelter Street",
        "phone": "+1234567890",
        "email": "test-shelter-1749825854978@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-13T14:44:15.421Z",
        "updatedAt": "2025-06-13T14:44:15.421Z",
        "memberships": []
      },
      {
        "id": "831e4556-c9f3-4f10-a9db-1eeada026601",
        "name": "Default Type Org 1749825855993",
        "type": "shelter",
        "description": "Organization without explicit type",
        "logo": null,
        "address": "123 Default Street",
        "phone": "+1234567890",
        "email": "default-type-1749825855993@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-13T14:44:16.419Z",
        "updatedAt": "2025-06-13T14:44:16.419Z",
        "memberships": []
      },
      {
        "id": "28ec945a-167a-4f3a-a0db-75b2a8c5e1f8",
        "name": "Update Type Test Org 1749825857773",
        "type": "shelter",
        "description": "Organization for type update tests",
        "logo": null,
        "address": "456 Update Street",
        "phone": "+9876543210",
        "email": "update-type-test-1749825857773@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-13T14:44:18.262Z",
        "updatedAt": "2025-06-13T14:44:18.262Z",
        "memberships": []
      },
      {
        "id": "e3577c17-fc21-4890-a484-2f71a059cb64",
        "name": "Filter Test Shelter 1 1749825859140",
        "type": "shelter",
        "description": "Test shelter 1 for filtering",
        "logo": null,
        "address": "100 Filter Street",
        "phone": "+1234567890",
        "email": "filter-shelter-0-1749825859140@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-13T14:44:19.535Z",
        "updatedAt": "2025-06-13T14:44:19.535Z",
        "memberships": []
      },
      {
        "id": "2901f07d-08e0-444b-96b1-43b5d9fb4c3d",
        "name": "Filter Test Shelter 2 1749825859601",
        "type": "shelter",
        "description": "Test shelter 2 for filtering",
        "logo": null,
        "address": "101 Filter Street",
        "phone": "+1234567891",
        "email": "filter-shelter-1-1749825859601@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-13T14:44:20.089Z",
        "updatedAt": "2025-06-13T14:44:20.089Z",
        "memberships": []
      },
      {
        "id": "0434ae87-a052-4c89-a3eb-bf504ab52088",
        "name": "Filter Test Shelter 3 1749825860161",
        "type": "shelter",
        "description": "Test shelter 3 for filtering",
        "logo": null,
        "address": "102 Filter Street",
        "phone": "+1234567892",
        "email": "filter-shelter-2-1749825860162@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-13T14:44:20.632Z",
        "updatedAt": "2025-06-13T14:44:20.632Z",
        "memberships": []
      }
    ],
    "pagination": {}
  }
}
```

**⏱️ Duration:** 795.0 ms  

</details>


---

### Test: Organization Types E2E Tests Filter Organizations by Type Should fail with invalid type filter
**Status:** ✅ PASSED  
**Duration:** 0.40s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations?type=invalid_type (394.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI1ODQ5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjU4NDksImV4cCI6MTc0OTgyOTQ0OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cf6g__h6KgbGQB29xfQ8uMWbqK1cZbsUOnXWIZtU1xutpFO32zQPxA30CeCoLJGQtBPrYdI2srau7cXB6rgToQb2JWDkhE_HVjNcD1OoOpO3uj8RLLL8HUMmo15t3Yr-I9vCqbeu68KPIU5_HujcEe1_1Oos575UPn0UMlWW9Owa6qodQ-4vj0EfGVKPlQ17DV7AxBMFmMP5xlJHK849TL-DN0KDP3GOOpV0WX3e_9i8ebwciYsSTTLb_ueFy9UCinWsLPljvSin_Y7Pr8XjIdHdz46rSrH7E-THAiDIhOEq-Mh0e8hLVnJsRgnOUuTQcLvHnOPz5JCExU5822Oq8w"
  }
}
```

**📥 Response:**
```json
{
  "status": 400,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "136",
    "etag": "W/\"88-KrwnPAzC9qqgXWMbZPC/2NwxQgE\"",
    "date": "Fri, 13 Jun 2025 14:44:21 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Invalid query parameters",
    "details": [
      {
        "field": "type",
        "message": "Invalid organization type filter. Valid types are: shelter"
      }
    ]
  }
}
```

**⏱️ Duration:** 394.9 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Organization Types E2E Tests Filter Organizations by Type Should return all organizations when no type filter is applied
**Status:** ✅ PASSED  
**Duration:** 0.68s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations (682.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI1ODQ5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjU4NDksImV4cCI6MTc0OTgyOTQ0OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cf6g__h6KgbGQB29xfQ8uMWbqK1cZbsUOnXWIZtU1xutpFO32zQPxA30CeCoLJGQtBPrYdI2srau7cXB6rgToQb2JWDkhE_HVjNcD1OoOpO3uj8RLLL8HUMmo15t3Yr-I9vCqbeu68KPIU5_HujcEe1_1Oos575UPn0UMlWW9Owa6qodQ-4vj0EfGVKPlQ17DV7AxBMFmMP5xlJHK849TL-DN0KDP3GOOpV0WX3e_9i8ebwciYsSTTLb_ueFy9UCinWsLPljvSin_Y7Pr8XjIdHdz46rSrH7E-THAiDIhOEq-Mh0e8hLVnJsRgnOUuTQcLvHnOPz5JCExU5822Oq8w"
  }
}
```

**📥 Response:**
```json
{
  "status": 200,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "84980",
    "etag": "W/\"14bf4-FzqP19OiBhwxNIwKl7tc/JzYZnw\"",
    "date": "Fri, 13 Jun 2025 14:44:22 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "5c4b53dc-277f-42cc-b208-44ac6fbaf0f9",
        "name": "Test Org for Memberships 1748380292595",
        "type": "shelter",
        "description": "Organization for membership testing",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "test-org-1748380292595@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T21:11:33.283Z",
        "updatedAt": "2025-05-27T21:11:33.283Z",
        "memberships": [
          {
            "id": "6709d3c7-2a3b-44b1-8df6-cf50aa03a569",
            "userId": "9e4jLRGIJOSQSEIjHTCHdCm5bOl1",
            "organizationId": "5c4b53dc-277f-42cc-b208-44ac6fbaf0f9",
            "role": "member",
            "status": "active",
            "createdAt": "2025-05-27T21:11:35.346Z",
            "updatedAt": "2025-05-27T21:11:35.346Z",
            "user": {
              "id": "9e4jLRGIJOSQSEIjHTCHdCm5bOl1",
              "email": "invite-user-1748380293844@example.com",
              "name": "User to Invite",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T21:11:34.430Z",
              "updatedAt": "2025-05-27T21:11:34.430Z",
              "isSuperAdmin": false
            }
          },
          {
            "id": "26cf7874-7ade-4942-9226-dc93665291a8",
            "userId": "2kzm3MDbOHOkRxcXN3sZgeP987t1",
            "organizationId": "5c4b53dc-277f-42cc-b208-44ac6fbaf0f9",
            "role": "admin",
            "status": "active",
            "createdAt": "2025-05-27T21:11:38.525Z",
            "updatedAt": "2025-05-27T21:11:38.525Z",
            "user": {
              "id": "2kzm3MDbOHOkRxcXN3sZgeP987t1",
              "email": "admin-user-1748380297222@example.com",
              "name": "Admin User",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T21:11:37.718Z",
              "updatedAt": "2025-05-27T21:11:37.718Z",
              "isSuperAdmin": false
            }
          },
          {
            "id": "8c4352c4-4379-4689-ae59-7773d7f0fd3b",
            "userId": "QOxlDcF5Q1cUyj5Me2c39e1C8sj1",
            "organizationId": "5c4b53dc-277f-42cc-b208-44ac6fbaf0f9",
            "role": "manager",
            "status": "active",
            "createdAt": "2025-05-27T21:11:40.037Z",
            "updatedAt": "2025-05-27T21:11:40.037Z",
            "user": {
              "id": "QOxlDcF5Q1cUyj5Me2c39e1C8sj1",
              "email": "manager-user-1748380298581@example.com",
              "name": "Manager User",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T21:11:39.140Z",
              "updatedAt": "2025-05-27T21:11:39.140Z",
              "isSuperAdmin": false
            }
          },
          {
            "id": "c4a0ed2a-42b8-44ae-9932-41ea7c0e0010",
            "userId": "QWEwgiw3xJQKRatGk2c3WqtuHcV2",
            "organizationId": "5c4b53dc-277f-42cc-b208-44ac6fbaf0f9",
            "role": "moderator",
            "status": "active",
            "createdAt": "2025-05-27T21:11:41.760Z",
            "updatedAt": "2025-05-27T21:11:41.760Z",
            "user": {
              "id": "QWEwgiw3xJQKRatGk2c3WqtuHcV2",
              "email": "moderator-user-1748380300099@example.com",
              "name": "Moderator User",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T21:11:40.556Z",
              "updatedAt": "2025-05-27T21:11:40.556Z",
              "isSuperAdmin": false
            }
          },
          {
            "id": "591f1eae-bcee-4dce-9429-895ba426f641",
            "userId": "pWYOXREIeUVMp24IGm0N7hykbd52",
            "organizationId": "5c4b53dc-277f-42cc-b208-44ac6fbaf0f9",
            "role": "volunteer",
            "status": "active",
            "createdAt": "2025-05-27T21:11:43.585Z",
            "updatedAt": "2025-05-27T21:11:43.585Z",
            "user": {
              "id": "pWYOXREIeUVMp24IGm0N7hykbd52",
              "email": "volunteer-user-1748380301817@example.com",
              "name": "Volunteer User",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T21:11:42.417Z",
              "updatedAt": "2025-05-27T21:11:42.417Z",
              "isSuperAdmin": false
            }
          },
          {
            "id": "3b324cbf-fd34-423b-935b-c8e6a7746a0e",
            "userId": "TnmyNpSnS7em9Y2H4qkff7leL5p2",
            "organizationId": "5c4b53dc-277f-42cc-b208-44ac6fbaf0f9",
            "role": "observer",
            "status": "active",
            "createdAt": "2025-05-27T21:11:45.124Z",
            "updatedAt": "2025-05-27T21:11:45.124Z",
            "user": {
              "id": "TnmyNpSnS7em9Y2H4qkff7leL5p2",
              "email": "observer-user-1748380303641@example.com",
              "name": "Observer User",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T21:11:44.129Z",
              "updatedAt": "2025-05-27T21:11:44.129Z",
              "isSuperAdmin": false
            }
          }
        ]
      },
      {
        "id": "82e1e643-95f4-4b33-b726-c7c80fe173f3",
        "name": "OrgA",
        "type": "shelter",
        "description": null,
        "logo": null,
        "address": null,
        "phone": null,
        "email": null,
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": null,
        "createdAt": "2025-05-17T14:21:54.428Z",
        "updatedAt": "2025-05-17T14:21:54.428Z",
        "memberships": [
          {
            "id": "0041dd38-83d6-41b9-b477-cfa0e2ff4bb5",
            "userId": "06maBdjJNiZ1IsgjAodIKi3FwNA2",
            "organizationId": "82e1e643-95f4-4b33-b726-c7c80fe173f3",
            "role": "member",
            "status": "active",
            "createdAt": "2025-05-17T14:21:56.660Z",
            "updatedAt": "2025-05-17T14:21:56.660Z",
            "user": {
              "id": "06maBdjJNiZ1IsgjAodIKi3FwNA2",
              "email": "userA@example.com",
              "name": "pep",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-17T14:21:56.549Z",
              "updatedAt": "2025-05-17T16:13:28.251Z",
              "isSuperAdmin": false
            }
          }
        ]
      },
      {
        "id": "21e0d6a4-077a-4670-9f1a-06ad92ba85e1",
        "name": "OrgB",
        "type": "shelter",
        "description": null,
        "logo": null,
        "address": null,
        "phone": null,
        "email": null,
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": null,
        "createdAt": "2025-05-17T14:21:54.538Z",
        "updatedAt": "2025-05-17T14:21:54.538Z",
        "memberships": [
          {
            "id": "e5e50054-7413-4afb-b07c-d0234f856d66",
            "userId": "o16KsHG4yrcFHBvvVmVwvlOl52i2",
            "organizationId": "21e0d6a4-077a-4670-9f1a-06ad92ba85e1",
            "role": "member",
            "status": "active",
            "createdAt": "2025-05-17T14:21:58.230Z",
            "updatedAt": "2025-05-17T14:21:58.230Z",
            "user": {
              "id": "o16KsHG4yrcFHBvvVmVwvlOl52i2",
              "email": "userB@example.com",
              "name": "paco",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-17T14:21:58.165Z",
              "updatedAt": "2025-05-17T16:13:28.251Z",
              "isSuperAdmin": false
            }
          }
        ]
      },
      {
        "id": "ab351d60-f8ca-461a-afac-5215c39d255f",
        "name": "Test Org",
        "type": "shelter",
        "description": "Test organization",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "testorg@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T10:47:20.259Z",
        "updatedAt": "2025-05-27T10:47:20.259Z",
        "memberships": []
      },
      {
        "id": "6b43a2ec-ee62-4c18-a79c-918df326cdfb",
        "name": "Test Org for Memberships 1748342946011",
        "type": "shelter",
        "description": "Organization for membership testing",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "test-org-1748342946011@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T10:49:06.701Z",
        "updatedAt": "2025-05-27T10:49:06.701Z",
        "memberships": []
      },
      {
        "id": "061750f1-0a0f-4985-96d7-06853aa0c832",
        "name": "Test Org for Memberships 1748343078013",
        "type": "shelter",
        "description": "Organization for membership testing",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "test-org-1748343078013@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T10:51:18.791Z",
        "updatedAt": "2025-05-27T10:51:18.791Z",
        "memberships": [
          {
            "id": "daf7ffe0-591a-405e-9978-fa10e2cda985",
            "userId": "ZnPlhCOtheS4qIf0dwObFMLD9R63",
            "organizationId": "061750f1-0a0f-4985-96d7-06853aa0c832",
            "role": "member",
            "status": "active",
            "createdAt": "2025-05-27T10:51:20.910Z",
            "updatedAt": "2025-05-27T10:51:20.910Z",
            "user": {
              "id": "ZnPlhCOtheS4qIf0dwObFMLD9R63",
              "email": "invite-user-1748343079277@example.com",
              "name": "User to Invite",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T10:51:19.907Z",
              "updatedAt": "2025-05-27T10:51:19.907Z",
              "isSuperAdmin": false
            }
          },
          {
            "id": "4be42ed0-d5be-4088-9535-a9e69048d095",
            "userId": "bPDyewr5SoO38os92UiCXqoK6iU2",
            "organizationId": "061750f1-0a0f-4985-96d7-06853aa0c832",
            "role": "admin",
            "status": "active",
            "createdAt": "2025-05-27T10:51:25.457Z",
            "updatedAt": "2025-05-27T10:51:25.457Z",
            "user": {
              "id": "bPDyewr5SoO38os92UiCXqoK6iU2",
              "email": "admin-user-1748343083400@example.com",
              "name": "Admin User",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T10:51:24.459Z",
              "updatedAt": "2025-05-27T10:51:24.459Z",
              "isSuperAdmin": false
            }
          },
          {
            "id": "e149efc0-1cd6-463f-a8bb-8f058b04c9ac",
            "userId": "K2CxTRq7jOOedSEliBmVL8pr0bJ2",
            "organizationId": "061750f1-0a0f-4985-96d7-06853aa0c832",
            "role": "manager",
            "status": "active",
            "createdAt": "2025-05-27T10:51:27.245Z",
            "updatedAt": "2025-05-27T10:51:27.245Z",
            "user": {
              "id": "K2CxTRq7jOOedSEliBmVL8pr0bJ2",
              "email": "manager-user-1748343085524@example.com",
              "name": "Manager User",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T10:51:26.309Z",
              "updatedAt": "2025-05-27T10:51:26.309Z",
              "isSuperAdmin": false
            }
          },
          {
            "id": "0687df17-c725-4d77-88f6-aff5e40481c5",
            "userId": "r41Z5NtEpFO25hCwmS0GMimwOaF2",
            "organizationId": "061750f1-0a0f-4985-96d7-06853aa0c832",
            "role": "moderator",
            "status": "active",
            "createdAt": "2025-05-27T10:51:29.039Z",
            "updatedAt": "2025-05-27T10:51:29.039Z",
            "user": {
              "id": "r41Z5NtEpFO25hCwmS0GMimwOaF2",
              "email": "moderator-user-1748343087311@example.com",
              "name": "Moderator User",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T10:51:28.146Z",
              "updatedAt": "2025-05-27T10:51:28.146Z",
              "isSuperAdmin": false
            }
          },
          {
            "id": "654c4b8f-36d7-449e-8d44-72d0d0e0b7e4",
            "userId": "bKAwZBrkOMeIGsphamRtYJ14T5G3",
            "organizationId": "061750f1-0a0f-4985-96d7-06853aa0c832",
            "role": "volunteer",
            "status": "active",
            "createdAt": "2025-05-27T10:51:31.145Z",
            "updatedAt": "2025-05-27T10:51:31.145Z",
            "user": {
              "id": "bKAwZBrkOMeIGsphamRtYJ14T5G3",
              "email": "volunteer-user-1748343089106@example.com",
              "name": "Volunteer User",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T10:51:30.095Z",
              "updatedAt": "2025-05-27T10:51:30.095Z",
              "isSuperAdmin": false
            }
          },
          {
            "id": "3d490c66-9891-4b1e-845e-f39e2265da70",
            "userId": "jYmCDSKRnRQm1I6Kmq8PhbYeRqk2",
            "organizationId": "061750f1-0a0f-4985-96d7-06853aa0c832",
            "role": "observer",
            "status": "active",
            "createdAt": "2025-05-27T10:51:32.917Z",
            "updatedAt": "2025-05-27T10:51:32.917Z",
            "user": {
              "id": "jYmCDSKRnRQm1I6Kmq8PhbYeRqk2",
              "email": "observer-user-1748343091213@example.com",
              "name": "Observer User",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T10:51:31.934Z",
              "updatedAt": "2025-05-27T10:51:31.934Z",
              "isSuperAdmin": false
            }
          }
        ]
      },
      {
        "id": "c1727cea-3ddb-4a6f-ab02-4a68ac17aab1",
        "name": "Get Test Org 1748343595557",
        "type": "shelter",
        "description": "Organization for get tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "get-test-org-1748343595557@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T10:59:56.150Z",
        "updatedAt": "2025-05-27T10:59:56.150Z",
        "memberships": []
      },
      {
        "id": "7f4f6e51-38ff-4b0b-a213-a1542f983085",
        "name": "Update Test Org 1748343597386",
        "type": "shelter",
        "description": "Organization for update tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "update-test-org-1748343597386@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T10:59:57.913Z",
        "updatedAt": "2025-05-27T10:59:57.913Z",
        "memberships": []
      },
      {
        "id": "c5b4f2bd-614b-4b38-be18-8f3878544e66",
        "name": "Delete Test Org 1748343599127",
        "type": "shelter",
        "description": "Organization for delete tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "delete-test-org-1748343599127@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T10:59:59.660Z",
        "updatedAt": "2025-05-27T10:59:59.660Z",
        "memberships": []
      },
      {
        "id": "b35d1342-5ecd-44fb-bc9a-5333425223c6",
        "name": "No Delete Perm Org 1748343600313",
        "type": "shelter",
        "description": "Organization for permission test",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "no-delete-perm-org-1748343600313@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T11:00:00.855Z",
        "updatedAt": "2025-05-27T11:00:00.855Z",
        "memberships": []
      },
      {
        "id": "19a316e7-e373-440e-be8f-1e87769f4314",
        "name": "Members Test Org 1748343602329",
        "type": "shelter",
        "description": "Organization for members tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "members-test-org-1748343602329@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T11:00:02.904Z",
        "updatedAt": "2025-05-27T11:00:02.904Z",
        "memberships": []
      },
      {
        "id": "74694883-fb36-4102-957e-521048338188",
        "name": "Org1 1748343607843",
        "type": "shelter",
        "description": "First organization for multitenant test",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "org1-1748343607843@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "yO1W4pz0TWO7nzjCnAeWn6IjSIo1",
        "createdAt": "2025-05-27T11:00:08.454Z",
        "updatedAt": "2025-05-27T11:00:08.454Z",
        "memberships": []
      },
      {
        "id": "13f856e8-c936-4fd2-8cf5-751bc01106c4",
        "name": "Org2 1748343608521",
        "type": "shelter",
        "description": "Second organization for multitenant test",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "org2-1748343608521@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "VeeK8nRScLQc2oQGeGHqrCtKaNI2",
        "createdAt": "2025-05-27T11:00:09.069Z",
        "updatedAt": "2025-05-27T11:00:09.069Z",
        "memberships": []
      },
      {
        "id": "4791d2ab-8c13-4cc0-a7e8-905224fbd2ff",
        "name": "Test Org for Memberships 1748343693654",
        "type": "shelter",
        "description": "Organization for membership testing",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "test-org-1748343693654@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T11:01:34.240Z",
        "updatedAt": "2025-05-27T11:01:34.240Z",
        "memberships": [
          {
            "id": "571d0fdb-c97f-438e-b5b0-69e06dad4f81",
            "userId": "nDnRbSGUnvfgo7QAfXc123Sr1kL2",
            "organizationId": "4791d2ab-8c13-4cc0-a7e8-905224fbd2ff",
            "role": "member",
            "status": "active",
            "createdAt": "2025-05-27T11:01:36.267Z",
            "updatedAt": "2025-05-27T11:01:36.267Z",
            "user": {
              "id": "nDnRbSGUnvfgo7QAfXc123Sr1kL2",
              "email": "invite-user-1748343694360@example.com",
              "name": "User to Invite",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T11:01:35.289Z",
              "updatedAt": "2025-05-27T11:01:35.289Z",
              "isSuperAdmin": false
            }
          },
          {
            "id": "9b98de34-72b3-4f04-b809-4120ed27adb7",
            "userId": "4YHNB5DTwydooES6fELF4Zsd9YF3",
            "organizationId": "4791d2ab-8c13-4cc0-a7e8-905224fbd2ff",
            "role": "admin",
            "status": "active",
            "createdAt": "2025-05-27T11:01:40.996Z",
            "updatedAt": "2025-05-27T11:01:40.996Z",
            "user": {
              "id": "4YHNB5DTwydooES6fELF4Zsd9YF3",
              "email": "admin-user-1748343699052@example.com",
              "name": "Admin User",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T11:01:39.896Z",
              "updatedAt": "2025-05-27T11:01:39.896Z",
              "isSuperAdmin": false
            }
          },
          {
            "id": "41dc7b44-0b8c-49b4-9b1b-b57dcc338879",
            "userId": "UMMSDS3eFaUcrUrFAYKjGI4kP9q2",
            "organizationId": "4791d2ab-8c13-4cc0-a7e8-905224fbd2ff",
            "role": "manager",
            "status": "active",
            "createdAt": "2025-05-27T11:01:42.933Z",
            "updatedAt": "2025-05-27T11:01:42.933Z",
            "user": {
              "id": "UMMSDS3eFaUcrUrFAYKjGI4kP9q2",
              "email": "manager-user-1748343701062@example.com",
              "name": "Manager User",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T11:01:41.942Z",
              "updatedAt": "2025-05-27T11:01:41.942Z",
              "isSuperAdmin": false
            }
          },
          {
            "id": "d0ed1ed9-2852-4703-8d3f-664e3edc4cdc",
            "userId": "Bblg9VybKrhrxk0B2naDjuCMCcv1",
            "organizationId": "4791d2ab-8c13-4cc0-a7e8-905224fbd2ff",
            "role": "moderator",
            "status": "active",
            "createdAt": "2025-05-27T11:01:44.981Z",
            "updatedAt": "2025-05-27T11:01:44.981Z",
            "user": {
              "id": "Bblg9VybKrhrxk0B2naDjuCMCcv1",
              "email": "moderator-user-1748343702997@example.com",
              "name": "Moderator User",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T11:01:43.992Z",
              "updatedAt": "2025-05-27T11:01:43.992Z",
              "isSuperAdmin": false
            }
          },
          {
            "id": "9ad91da6-ae32-44b5-b96f-94fe42b39a27",
            "userId": "BDMF289yRKfWbeZnGoOLffxxhIu1",
            "organizationId": "4791d2ab-8c13-4cc0-a7e8-905224fbd2ff",
            "role": "volunteer",
            "status": "active",
            "createdAt": "2025-05-27T11:01:46.598Z",
            "updatedAt": "2025-05-27T11:01:46.598Z",
            "user": {
              "id": "BDMF289yRKfWbeZnGoOLffxxhIu1",
              "email": "volunteer-user-1748343705044@example.com",
              "name": "Volunteer User",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T11:01:45.668Z",
              "updatedAt": "2025-05-27T11:01:45.668Z",
              "isSuperAdmin": false
            }
          },
          {
            "id": "e4deee94-abac-4e54-875b-e98fa099a443",
            "userId": "yaLc2pfO7AdOQu3gcpMmG3lLDBU2",
            "organizationId": "4791d2ab-8c13-4cc0-a7e8-905224fbd2ff",
            "role": "observer",
            "status": "active",
            "createdAt": "2025-05-27T11:01:48.748Z",
            "updatedAt": "2025-05-27T11:01:48.748Z",
            "user": {
              "id": "yaLc2pfO7AdOQu3gcpMmG3lLDBU2",
              "email": "observer-user-1748343706661@example.com",
              "name": "Observer User",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T11:01:47.805Z",
              "updatedAt": "2025-05-27T11:01:47.805Z",
              "isSuperAdmin": false
            }
          }
        ]
      },
      {
        "id": "a5d1ccb1-0278-459d-8ce7-a1e5b2a7018d",
        "name": "Get Test Org 1748344124522",
        "type": "shelter",
        "description": "Organization for get tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "get-test-org-1748344124522@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T11:08:45.087Z",
        "updatedAt": "2025-05-27T11:08:45.087Z",
        "memberships": []
      },
      {
        "id": "e469a5d0-b6a9-4aaa-b999-bf326a045c9e",
        "name": "Update Test Org 1748344126333",
        "type": "shelter",
        "description": "Organization for update tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "update-test-org-1748344126333@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T11:08:46.883Z",
        "updatedAt": "2025-05-27T11:08:46.883Z",
        "memberships": []
      },
      {
        "id": "a312de65-e2f8-49fd-a0a0-0dc72428476f",
        "name": "Delete Test Org 1748344128046",
        "type": "shelter",
        "description": "Organization for delete tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "delete-test-org-1748344128046@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T11:08:48.567Z",
        "updatedAt": "2025-05-27T11:08:48.567Z",
        "memberships": []
      },
      {
        "id": "0e7fedbc-deed-4680-8875-5530f34de47d",
        "name": "No Delete Perm Org 1748344129198",
        "type": "shelter",
        "description": "Organization for permission test",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "no-delete-perm-org-1748344129198@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T11:08:49.794Z",
        "updatedAt": "2025-05-27T11:08:49.794Z",
        "memberships": []
      },
      {
        "id": "539bf829-0999-488a-8c14-41ef2374201b",
        "name": "Members Test Org 1748344131280",
        "type": "shelter",
        "description": "Organization for members tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "members-test-org-1748344131280@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T11:08:51.847Z",
        "updatedAt": "2025-05-27T11:08:51.847Z",
        "memberships": []
      },
      {
        "id": "89691685-4f53-4103-928b-3aa2d2997e27",
        "name": "Org1 1748344136311",
        "type": "shelter",
        "description": "First organization for multitenant test",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "org1-1748344136311@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "UlJzcBT3r0WGHMQT7NjCJnQ6QDs2",
        "createdAt": "2025-05-27T11:08:56.858Z",
        "updatedAt": "2025-05-27T11:08:56.858Z",
        "memberships": []
      },
      {
        "id": "115bc04b-4aac-40d8-b6d8-268635af9b35",
        "name": "Org2 1748344136931",
        "type": "shelter",
        "description": "Second organization for multitenant test",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "org2-1748344136931@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "CvtOLa3sgBc406d7MQpBpq3w9EL2",
        "createdAt": "2025-05-27T11:08:57.424Z",
        "updatedAt": "2025-05-27T11:08:57.424Z",
        "memberships": []
      },
      {
        "id": "6e1de6ba-2b47-43e8-a782-37fb115c5818",
        "name": "Get Test Org 1748344697404",
        "type": "shelter",
        "description": "Organization for get tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "get-test-org-1748344697404@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T11:18:17.986Z",
        "updatedAt": "2025-05-27T11:18:17.986Z",
        "memberships": []
      },
      {
        "id": "8eaca087-071b-4e85-8e5a-e6aa3032b9b8",
        "name": "Update Test Org 1748344699140",
        "type": "shelter",
        "description": "Organization for update tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "update-test-org-1748344699140@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T11:18:19.731Z",
        "updatedAt": "2025-05-27T11:18:19.731Z",
        "memberships": []
      },
      {
        "id": "54326112-2e61-4aba-a282-f631562b50d7",
        "name": "Conversations Test Org",
        "type": "shelter",
        "description": "Organization for conversation testing",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "conversations-test@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T23:00:03.058Z",
        "updatedAt": "2025-05-27T23:00:03.058Z",
        "memberships": []
      },
      {
        "id": "f11249a2-5483-4195-80a7-30ed47369a6a",
        "name": "Conversations Test Org 2",
        "type": "shelter",
        "description": "Second organization for conversation testing",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "conversations-test2@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T23:00:04.274Z",
        "updatedAt": "2025-05-27T23:00:04.274Z",
        "memberships": []
      },
      {
        "id": "157e5517-6fdc-4227-98d2-a1155eb758fa",
        "name": "Test Organization 1749143312937",
        "type": "shelter",
        "description": "Test organization for E2E testing",
        "logo": null,
        "address": "123 Test Street",
        "phone": "+1234567890",
        "email": "test@organization.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:08:33.431Z",
        "updatedAt": "2025-06-05T17:08:33.431Z",
        "memberships": []
      },
      {
        "id": "7e1889c6-4ce1-4072-ab82-58d5a7927168",
        "name": "User Org 1749143314064",
        "type": "shelter",
        "description": "Organization created by regular user",
        "logo": null,
        "address": "789 User Street",
        "phone": "+1555666777",
        "email": "user-org-1749143314064@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "qSOy1KL02XgUOpT0FOihENnhylx2",
        "createdAt": "2025-06-05T17:08:34.451Z",
        "updatedAt": "2025-06-05T17:08:34.451Z",
        "memberships": []
      },
      {
        "id": "16118130-869e-498d-a5b2-a25cbc184fc9",
        "name": "Explicit Shelter 1749143314521",
        "type": "shelter",
        "description": "Shelter with explicit type",
        "logo": null,
        "address": "456 Shelter Avenue",
        "phone": "+1987654321",
        "email": "explicit-shelter-1749143314521@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:08:35.053Z",
        "updatedAt": "2025-06-05T17:08:35.053Z",
        "memberships": []
      },
      {
        "id": "635c02b3-d67d-4e12-b0da-83172e9e40f9",
        "name": "Delete Test Org 1748344700836",
        "type": "shelter",
        "description": "Organization for delete tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "delete-test-org-1748344700836@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T11:18:21.372Z",
        "updatedAt": "2025-05-27T11:18:21.372Z",
        "memberships": []
      },
      {
        "id": "bd688d7a-9870-4973-a196-a8b856f66e40",
        "name": "No Delete Perm Org 1748344701996",
        "type": "shelter",
        "description": "Organization for permission test",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "no-delete-perm-org-1748344701996@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T11:18:22.499Z",
        "updatedAt": "2025-05-27T11:18:22.499Z",
        "memberships": []
      },
      {
        "id": "fcb7aa59-1684-4c67-bbf2-2f312cfde37b",
        "name": "Members Test Org 1748344703996",
        "type": "shelter",
        "description": "Organization for members tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "members-test-org-1748344703996@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T11:18:24.503Z",
        "updatedAt": "2025-05-27T11:18:24.503Z",
        "memberships": []
      },
      {
        "id": "661782af-a6dc-4ac8-986c-17a209a0cd97",
        "name": "Org1 1748344709123",
        "type": "shelter",
        "description": "First organization for multitenant test",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "org1-1748344709123@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "QIp7byhKKFbc1UhuzhSVxCo53eT2",
        "createdAt": "2025-05-27T11:18:29.667Z",
        "updatedAt": "2025-05-27T11:18:29.667Z",
        "memberships": []
      },
      {
        "id": "a4fb8168-cd3c-491e-bf0c-40f65cea82c3",
        "name": "Org2 1748344709726",
        "type": "shelter",
        "description": "Second organization for multitenant test",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "org2-1748344709726@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "KfxdnbrTTEX0cwYhhS6xFc3Jb602",
        "createdAt": "2025-05-27T11:18:30.195Z",
        "updatedAt": "2025-05-27T11:18:30.195Z",
        "memberships": []
      },
      {
        "id": "bc40281c-24b2-4bd2-8338-1cea5f9ce6a1",
        "name": "Get Test Org 1748345098725",
        "type": "shelter",
        "description": "Organization for get tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "get-test-org-1748345098725@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T11:24:59.203Z",
        "updatedAt": "2025-05-27T11:24:59.203Z",
        "memberships": []
      },
      {
        "id": "9f6a76ec-269c-4ffe-b6b3-3a4abb92e736",
        "name": "Update Test Org 1748345100867",
        "type": "shelter",
        "description": "Organization for update tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "update-test-org-1748345100867@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T11:25:01.349Z",
        "updatedAt": "2025-05-27T11:25:01.349Z",
        "memberships": []
      },
      {
        "id": "32c1c2d1-c495-4eb6-b556-691847eb81c7",
        "name": "Delete Test Org 1748345102474",
        "type": "shelter",
        "description": "Organization for delete tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "delete-test-org-1748345102474@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T11:25:02.962Z",
        "updatedAt": "2025-05-27T11:25:02.962Z",
        "memberships": []
      },
      {
        "id": "ef89b209-b771-4477-a784-832f8176cf2b",
        "name": "No Delete Perm Org 1748345103632",
        "type": "shelter",
        "description": "Organization for permission test",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "no-delete-perm-org-1748345103632@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T11:25:04.131Z",
        "updatedAt": "2025-05-27T11:25:04.131Z",
        "memberships": []
      },
      {
        "id": "fb2a6327-c1b0-4c19-8daa-0e209c8ed540",
        "name": "Members Test Org 1748345105521",
        "type": "shelter",
        "description": "Organization for members tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "members-test-org-1748345105521@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T11:25:06.083Z",
        "updatedAt": "2025-05-27T11:25:06.083Z",
        "memberships": []
      },
      {
        "id": "2db13a9b-bcab-4190-aaa4-f6a17e181e37",
        "name": "Org1 1748345111290",
        "type": "shelter",
        "description": "First organization for multitenant test",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "org1-1748345111290@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "xxMkEYxJhBYpF8aTFF8RxKLY9H63",
        "createdAt": "2025-05-27T11:25:11.808Z",
        "updatedAt": "2025-05-27T11:25:11.808Z",
        "memberships": []
      },
      {
        "id": "26c83c89-ecf9-4536-b807-e4f7c20b7e95",
        "name": "Org2 1748345111872",
        "type": "shelter",
        "description": "Second organization for multitenant test",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "org2-1748345111872@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "ZxecqCzBVwQjz2sahpOauRRUpv33",
        "createdAt": "2025-05-27T11:25:12.422Z",
        "updatedAt": "2025-05-27T11:25:12.422Z",
        "memberships": []
      },
      {
        "id": "0e7b0539-ad61-4ab4-9f50-60f77b7ce177",
        "name": "Debug Test Org",
        "type": "shelter",
        "description": "Debug test",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "debug@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T12:44:04.721Z",
        "updatedAt": "2025-05-27T12:44:04.721Z",
        "memberships": []
      },
      {
        "id": "604ad460-c0d3-4545-b343-bcdac04f8b83",
        "name": "Test Organization 1748350700161",
        "type": "shelter",
        "description": "Test organization for E2E testing",
        "logo": null,
        "address": "123 Test Street",
        "phone": "+1234567890",
        "email": "test@organization.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T12:58:20.859Z",
        "updatedAt": "2025-05-27T12:58:20.859Z",
        "memberships": []
      },
      {
        "id": "f647c561-57b4-44d3-99ce-f1858a2faa68",
        "name": "Test Organization 1748350774505",
        "type": "shelter",
        "description": "Test organization for E2E testing",
        "logo": null,
        "address": "123 Test Street",
        "phone": "+1234567890",
        "email": "test@organization.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T12:59:35.199Z",
        "updatedAt": "2025-05-27T12:59:35.199Z",
        "memberships": []
      },
      {
        "id": "fc3fb3d9-e7f0-4cb1-a32d-2c569b842f96",
        "name": "Test Organization 1748351010958",
        "type": "shelter",
        "description": "Test organization for E2E testing",
        "logo": null,
        "address": "123 Test Street",
        "phone": "+1234567890",
        "email": "test@organization.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T13:03:31.693Z",
        "updatedAt": "2025-05-27T13:03:31.693Z",
        "memberships": []
      },
      {
        "id": "345dd658-c90d-4df2-82cf-1a6deb2da8f8",
        "name": "User Org 1748351012163",
        "type": "shelter",
        "description": "Organization created by regular user",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "user-org-1748351012163@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "lLz9pur7dATte9eeivTYOtHonyJ2",
        "createdAt": "2025-05-27T13:03:32.758Z",
        "updatedAt": "2025-05-27T13:03:32.758Z",
        "memberships": []
      },
      {
        "id": "dcd93901-ef19-4937-8b4f-b398fbad9651",
        "name": "Get Test Org 1748351012955",
        "type": "shelter",
        "description": "Organization for get tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "get-test-org-1748351012955@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T13:03:33.592Z",
        "updatedAt": "2025-05-27T13:03:33.592Z",
        "memberships": []
      },
      {
        "id": "516fd4fc-f8d3-4629-9b98-618d929128b3",
        "name": "Update Test Org 1748351014770",
        "type": "shelter",
        "description": "Organization for update tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "update-test-org-1748351014770@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T13:03:35.388Z",
        "updatedAt": "2025-05-27T13:03:35.388Z",
        "memberships": []
      },
      {
        "id": "8befa0e9-098d-403e-a4d8-8b92294d462c",
        "name": "Delete Test Org 1748351016758",
        "type": "shelter",
        "description": "Organization for delete tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "delete-test-org-1748351016758@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T13:03:37.437Z",
        "updatedAt": "2025-05-27T13:03:37.437Z",
        "memberships": []
      },
      {
        "id": "97d199a0-eab1-4198-a7de-a7afe0ca5c4a",
        "name": "No Delete Perm Org 1748351018088",
        "type": "shelter",
        "description": "Organization for permission test",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "no-delete-perm-org-1748351018088@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T13:03:38.694Z",
        "updatedAt": "2025-05-27T13:03:38.694Z",
        "memberships": []
      },
      {
        "id": "1446a576-63c7-4d0f-84f4-5d1008688ed4",
        "name": "Members Test Org 1748351020177",
        "type": "shelter",
        "description": "Organization for members tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "members-test-org-1748351020177@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T13:03:40.749Z",
        "updatedAt": "2025-05-27T13:03:40.749Z",
        "memberships": []
      },
      {
        "id": "bb398be4-b9b3-4f0f-bde1-bb0e243db9e2",
        "name": "Org1 1748351024778",
        "type": "shelter",
        "description": "First organization for multitenant test",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "org1-1748351024778@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "x9VOQR1OhQW60YVQDj7e3nUiUsA3",
        "createdAt": "2025-05-27T13:03:45.352Z",
        "updatedAt": "2025-05-27T13:03:45.352Z",
        "memberships": []
      },
      {
        "id": "0a1f267f-9aea-4d87-b3f7-e4977b2ea332",
        "name": "Org2 1748351025407",
        "type": "shelter",
        "description": "Second organization for multitenant test",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "org2-1748351025407@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "sSlHyz2uwbTkeYvGEsM2QkbvdtG3",
        "createdAt": "2025-05-27T13:03:45.965Z",
        "updatedAt": "2025-05-27T13:03:45.965Z",
        "memberships": []
      },
      {
        "id": "6db29d0d-a420-4861-9ede-e06d55e9f365",
        "name": "Update Test Org 1748351136093",
        "type": "shelter",
        "description": "Organization for update tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "update-test-org-1748351136093@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T13:05:36.848Z",
        "updatedAt": "2025-05-27T13:05:36.848Z",
        "memberships": []
      },
      {
        "id": "f75aa09e-61d7-4453-bec9-a405e0577174",
        "name": "Update Test Org 1748351541622",
        "type": "shelter",
        "description": "Organization for update tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "update-test-org-1748351541622@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T13:12:22.389Z",
        "updatedAt": "2025-05-27T13:12:22.389Z",
        "memberships": []
      },
      {
        "id": "30a27dd2-68fb-49c8-8721-6b818d1f259d",
        "name": "Test Organization 1748351847195",
        "type": "shelter",
        "description": "Test organization for E2E testing",
        "logo": null,
        "address": "123 Test Street",
        "phone": "+1234567890",
        "email": "test@organization.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T13:17:27.879Z",
        "updatedAt": "2025-05-27T13:17:27.879Z",
        "memberships": []
      },
      {
        "id": "c34662ef-108b-4dc6-a896-98cc7dc90616",
        "name": "User Org 1748351848400",
        "type": "shelter",
        "description": "Organization created by regular user",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "user-org-1748351848400@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "1YWHDGv1EfPJgfYb8JXwuDrwAcG3",
        "createdAt": "2025-05-27T13:17:28.988Z",
        "updatedAt": "2025-05-27T13:17:28.988Z",
        "memberships": []
      },
      {
        "id": "b3c54848-f27a-4707-96c6-fb958478e2d1",
        "name": "Get Test Org 1748351849227",
        "type": "shelter",
        "description": "Organization for get tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "get-test-org-1748351849227@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T13:17:29.753Z",
        "updatedAt": "2025-05-27T13:17:29.753Z",
        "memberships": []
      },
      {
        "id": "d1e35060-53d3-4f1f-9975-822c46f9c10b",
        "name": "Update Test Org 1748351850991",
        "type": "shelter",
        "description": "Organization for update tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "update-test-org-1748351850991@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T13:17:31.512Z",
        "updatedAt": "2025-05-27T13:17:31.512Z",
        "memberships": []
      },
      {
        "id": "e4226839-dfa3-45c3-8a28-f86d86f74c2f",
        "name": "Delete Test Org 1748351852610",
        "type": "shelter",
        "description": "Organization for delete tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "delete-test-org-1748351852610@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T13:17:33.185Z",
        "updatedAt": "2025-05-27T13:17:33.185Z",
        "memberships": []
      },
      {
        "id": "76ff7a48-57da-42e4-bfb1-07dbe7ef7faf",
        "name": "No Delete Perm Org 1748351853782",
        "type": "shelter",
        "description": "Organization for permission test",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "no-delete-perm-org-1748351853782@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T13:17:34.290Z",
        "updatedAt": "2025-05-27T13:17:34.290Z",
        "memberships": []
      },
      {
        "id": "d5d04563-70f7-41d8-af34-5aa5184cf367",
        "name": "Members Test Org 1748351855647",
        "type": "shelter",
        "description": "Organization for members tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "members-test-org-1748351855647@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T13:17:36.255Z",
        "updatedAt": "2025-05-27T13:17:36.255Z",
        "memberships": []
      },
      {
        "id": "f833dc2c-949e-4145-92df-262b8933d030",
        "name": "Org1 1748351860572",
        "type": "shelter",
        "description": "First organization for multitenant test",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "org1-1748351860572@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "lX4RjI4JRAQD2YLopUY9rIMF9Qk1",
        "createdAt": "2025-05-27T13:17:41.170Z",
        "updatedAt": "2025-05-27T13:17:41.170Z",
        "memberships": []
      },
      {
        "id": "b14c3138-a54c-4e66-b96b-f2fc4edf5961",
        "name": "Org2 1748351861256",
        "type": "shelter",
        "description": "Second organization for multitenant test",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "org2-1748351861256@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "dcVYzB70FOP3tbiZSPwzBLakBk92",
        "createdAt": "2025-05-27T13:17:41.782Z",
        "updatedAt": "2025-05-27T13:17:41.782Z",
        "memberships": []
      },
      {
        "id": "57c05447-4dd1-47b9-8c1b-9861f36d27d5",
        "name": "Test Organization 1748376968176",
        "type": "shelter",
        "description": "Test organization for E2E testing",
        "logo": null,
        "address": "123 Test Street",
        "phone": "+1234567890",
        "email": "test@organization.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T20:16:08.844Z",
        "updatedAt": "2025-05-27T20:16:08.844Z",
        "memberships": []
      },
      {
        "id": "e7c9010e-326b-48df-9173-b9138a33ff60",
        "name": "User Org 1748376969480",
        "type": "shelter",
        "description": "Organization created by regular user",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "user-org-1748376969480@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "xpv8yPh2UZRQ4pyZj4OTGO5l0th2",
        "createdAt": "2025-05-27T20:16:10.305Z",
        "updatedAt": "2025-05-27T20:16:10.305Z",
        "memberships": []
      },
      {
        "id": "2d0a4a32-8d9d-42bf-8538-635694bed719",
        "name": "Get Test Org 1748376970499",
        "type": "shelter",
        "description": "Organization for get tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "get-test-org-1748376970499@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T20:16:10.998Z",
        "updatedAt": "2025-05-27T20:16:10.998Z",
        "memberships": []
      },
      {
        "id": "8a50284d-d777-480d-b75d-9c6a5a9120f5",
        "name": "Update Test Org 1748376972236",
        "type": "shelter",
        "description": "Organization for update tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "update-test-org-1748376972236@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T20:16:12.741Z",
        "updatedAt": "2025-05-27T20:16:12.741Z",
        "memberships": []
      },
      {
        "id": "7ed19efd-10eb-4755-a315-bea4bf3abffc",
        "name": "Delete Test Org 1748376973871",
        "type": "shelter",
        "description": "Organization for delete tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "delete-test-org-1748376973871@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T20:16:14.478Z",
        "updatedAt": "2025-05-27T20:16:14.478Z",
        "memberships": []
      },
      {
        "id": "68def88b-679e-40b5-8dc8-17bc4d595161",
        "name": "No Delete Perm Org 1748376975092",
        "type": "shelter",
        "description": "Organization for permission test",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "no-delete-perm-org-1748376975092@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T20:16:15.588Z",
        "updatedAt": "2025-05-27T20:16:15.588Z",
        "memberships": []
      },
      {
        "id": "d18f6a24-b9e6-4b04-8a1b-89142581ef0d",
        "name": "Members Test Org 1748376976916",
        "type": "shelter",
        "description": "Organization for members tests",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "members-test-org-1748376976916@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T20:16:17.447Z",
        "updatedAt": "2025-05-27T20:16:17.447Z",
        "memberships": []
      },
      {
        "id": "98b62416-8cf0-4b45-a376-0d13cf2de0ff",
        "name": "Org1 1748376981120",
        "type": "shelter",
        "description": "First organization for multitenant test",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "org1-1748376981120@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "xdWbtLhfWdcUhpni4PN38xt4AkA3",
        "createdAt": "2025-05-27T20:16:21.641Z",
        "updatedAt": "2025-05-27T20:16:21.641Z",
        "memberships": []
      },
      {
        "id": "754f65ad-7a27-4be6-8205-433b927f0150",
        "name": "Org2 1748376981698",
        "type": "shelter",
        "description": "Second organization for multitenant test",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "org2-1748376981698@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "CSHCi7NrOAUvUSSmxeDcdPRc49M2",
        "createdAt": "2025-05-27T20:16:22.244Z",
        "updatedAt": "2025-05-27T20:16:22.244Z",
        "memberships": []
      },
      {
        "id": "4c88a983-1598-4ba0-a005-169f63c42f31",
        "name": "Get Test Org 1749143315195",
        "type": "shelter",
        "description": "Organization for get tests",
        "logo": null,
        "address": "321 Get Test Avenue",
        "phone": "+1888999000",
        "email": "get-test-org-1749143315195@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:08:35.715Z",
        "updatedAt": "2025-06-05T17:08:35.715Z",
        "memberships": []
      },
      {
        "id": "d1413462-931e-47ee-a249-715d2290bbdb",
        "name": "Update Test Org 1749143316679",
        "type": "shelter",
        "description": "Organization for update tests",
        "logo": null,
        "address": "456 Update Test Boulevard",
        "phone": "+1777888999",
        "email": "update-test-org-1749143316679@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:08:37.110Z",
        "updatedAt": "2025-06-05T17:08:37.110Z",
        "memberships": []
      },
      {
        "id": "0bdd7c0e-2537-47d2-83c8-5c19f6f2c51a",
        "name": "Delete Test Org 1749143318117",
        "type": "shelter",
        "description": "Organization for delete tests",
        "logo": null,
        "address": "789 Delete Test Street",
        "phone": "+1333444555",
        "email": "delete-test-org-1749143318117@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:08:38.579Z",
        "updatedAt": "2025-06-05T17:08:38.579Z",
        "memberships": []
      },
      {
        "id": "4d452f40-f14e-4d3a-af5e-1f85347c56fc",
        "name": "Test Org for Memberships 1748380117908",
        "type": "shelter",
        "description": "Organization for membership testing",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "test-org-1748380117908@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T21:08:38.558Z",
        "updatedAt": "2025-05-27T21:08:38.558Z",
        "memberships": [
          {
            "id": "f26294f1-8234-4a38-97b9-d15ffb862468",
            "userId": "fhUD8XDGOsgc2eJYSjSC0hV9Xz03",
            "organizationId": "4d452f40-f14e-4d3a-af5e-1f85347c56fc",
            "role": "member",
            "status": "active",
            "createdAt": "2025-05-27T21:08:40.889Z",
            "updatedAt": "2025-05-27T21:08:40.889Z",
            "user": {
              "id": "fhUD8XDGOsgc2eJYSjSC0hV9Xz03",
              "email": "invite-user-1748380119099@example.com",
              "name": "User to Invite",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T21:08:39.836Z",
              "updatedAt": "2025-05-27T21:08:39.836Z",
              "isSuperAdmin": false
            }
          },
          {
            "id": "1132d807-d4b6-41f7-bd2e-08b182d662bb",
            "userId": "XIHXIGt7aARQ2oVAjUorHJkgrV23",
            "organizationId": "4d452f40-f14e-4d3a-af5e-1f85347c56fc",
            "role": "admin",
            "status": "active",
            "createdAt": "2025-05-27T21:08:44.619Z",
            "updatedAt": "2025-05-27T21:08:44.619Z",
            "user": {
              "id": "XIHXIGt7aARQ2oVAjUorHJkgrV23",
              "email": "admin-user-1748380123090@example.com",
              "name": "Admin User",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T21:08:43.584Z",
              "updatedAt": "2025-05-27T21:08:43.584Z",
              "isSuperAdmin": false
            }
          },
          {
            "id": "e88af3ac-8993-4b57-9e24-3ec70bdcad71",
            "userId": "bqnCfE07lJcAeC4UcawP7tzK1QU2",
            "organizationId": "4d452f40-f14e-4d3a-af5e-1f85347c56fc",
            "role": "manager",
            "status": "active",
            "createdAt": "2025-05-27T21:08:46.151Z",
            "updatedAt": "2025-05-27T21:08:46.151Z",
            "user": {
              "id": "bqnCfE07lJcAeC4UcawP7tzK1QU2",
              "email": "manager-user-1748380124683@example.com",
              "name": "Manager User",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T21:08:45.195Z",
              "updatedAt": "2025-05-27T21:08:45.195Z",
              "isSuperAdmin": false
            }
          },
          {
            "id": "4c0bb516-10ef-421a-9289-a07ee70e0a35",
            "userId": "bOuYghLTl1ONfW42d94hGMe7Fsz2",
            "organizationId": "4d452f40-f14e-4d3a-af5e-1f85347c56fc",
            "role": "moderator",
            "status": "active",
            "createdAt": "2025-05-27T21:08:47.786Z",
            "updatedAt": "2025-05-27T21:08:47.786Z",
            "user": {
              "id": "bOuYghLTl1ONfW42d94hGMe7Fsz2",
              "email": "moderator-user-1748380126214@example.com",
              "name": "Moderator User",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T21:08:46.811Z",
              "updatedAt": "2025-05-27T21:08:46.811Z",
              "isSuperAdmin": false
            }
          },
          {
            "id": "bad8e4c0-1046-4faa-b9d0-fda80231fa2b",
            "userId": "bNRkXj6l2oVjvBW9vHfIXWfS9tf2",
            "organizationId": "4d452f40-f14e-4d3a-af5e-1f85347c56fc",
            "role": "volunteer",
            "status": "active",
            "createdAt": "2025-05-27T21:08:49.329Z",
            "updatedAt": "2025-05-27T21:08:49.329Z",
            "user": {
              "id": "bNRkXj6l2oVjvBW9vHfIXWfS9tf2",
              "email": "volunteer-user-1748380127849@example.com",
              "name": "Volunteer User",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T21:08:48.339Z",
              "updatedAt": "2025-05-27T21:08:48.339Z",
              "isSuperAdmin": false
            }
          },
          {
            "id": "55093882-0eba-4452-a65e-6f20f29a2a40",
            "userId": "UM0xVFAbL5QQyTdSfEzSKwKCRVm1",
            "organizationId": "4d452f40-f14e-4d3a-af5e-1f85347c56fc",
            "role": "observer",
            "status": "active",
            "createdAt": "2025-05-27T21:08:51.096Z",
            "updatedAt": "2025-05-27T21:08:51.096Z",
            "user": {
              "id": "UM0xVFAbL5QQyTdSfEzSKwKCRVm1",
              "email": "observer-user-1748380129392@example.com",
              "name": "Observer User",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T21:08:50.085Z",
              "updatedAt": "2025-05-27T21:08:50.085Z",
              "isSuperAdmin": false
            }
          }
        ]
      },
      {
        "id": "95d9587d-b30e-41ee-8181-e6689861bc68",
        "name": "No Delete Perm Org 1749143319202",
        "type": "shelter",
        "description": "Organization for permission test",
        "logo": null,
        "address": "999 Permission Test Lane",
        "phone": "+1666777888",
        "email": "no-delete-perm-org-1749143319202@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:08:39.628Z",
        "updatedAt": "2025-06-05T17:08:39.628Z",
        "memberships": []
      },
      {
        "id": "1c672eec-0125-4f06-944a-a7f6fd44a4b7",
        "name": "Members Test Org 1749143321395",
        "type": "shelter",
        "description": "Organization for members tests",
        "logo": null,
        "address": "111 Members Test Road",
        "phone": "+1222333444",
        "email": "members-test-org-1749143321395@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:08:41.908Z",
        "updatedAt": "2025-06-05T17:08:41.908Z",
        "memberships": []
      },
      {
        "id": "b3028b06-872f-4e34-8a40-6a378ac128ea",
        "name": "Org1 1749143325678",
        "type": "shelter",
        "description": "First organization for multitenant test",
        "logo": null,
        "address": "123 Org1 Street",
        "phone": "+1111222333",
        "email": "org1-1749143325678@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "PxpHhwF0yyPXDZGndpWapajXHqw2",
        "createdAt": "2025-06-05T17:08:46.101Z",
        "updatedAt": "2025-06-05T17:08:46.101Z",
        "memberships": []
      },
      {
        "id": "bc891ea7-c752-48d8-9843-fd7ea8fffb53",
        "name": "Org2 1749143326166",
        "type": "shelter",
        "description": "Second organization for multitenant test",
        "logo": null,
        "address": "456 Org2 Avenue",
        "phone": "+1444555666",
        "email": "org2-1749143326166@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "LjO7Q26DJ3WHnq66vseNnfYpPon2",
        "createdAt": "2025-06-05T17:08:46.612Z",
        "updatedAt": "2025-06-05T17:08:46.612Z",
        "memberships": []
      },
      {
        "id": "7de15f6b-1f68-4bf1-90fc-1002fd0e5903",
        "name": "Test Shelter 1749143343749",
        "type": "shelter",
        "description": "Test shelter for E2E testing",
        "logo": null,
        "address": "123 Shelter Street",
        "phone": "+1234567890",
        "email": "test-shelter-1749143343749@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:09:04.280Z",
        "updatedAt": "2025-06-05T17:09:04.280Z",
        "memberships": []
      },
      {
        "id": "244e9d7b-67ad-4d45-b7f4-fc824a9ef6c0",
        "name": "Default Type Org 1749143344412",
        "type": "shelter",
        "description": "Organization without explicit type",
        "logo": null,
        "address": "123 Default Street",
        "phone": "+1234567890",
        "email": "default-type-1749143344412@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:09:04.861Z",
        "updatedAt": "2025-06-05T17:09:04.861Z",
        "memberships": []
      },
      {
        "id": "60b28092-2321-4956-a8ae-7a6195bda9c6",
        "name": "Empty Type Organization",
        "type": "shelter",
        "description": "Organization with empty type",
        "logo": null,
        "address": "123 Empty Street",
        "phone": "+1234567890",
        "email": "empty-type@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-01T23:18:19.315Z",
        "updatedAt": "2025-06-01T23:18:19.315Z",
        "memberships": []
      },
      {
        "id": "896d092c-0e4b-4325-8f28-0e7da4ec7398",
        "name": "Update Type Test Org 1749143346287",
        "type": "shelter",
        "description": "Organization for type update tests",
        "logo": null,
        "address": "456 Update Street",
        "phone": "+9876543210",
        "email": "update-type-test-1749143346287@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:09:06.657Z",
        "updatedAt": "2025-06-05T17:09:06.657Z",
        "memberships": []
      },
      {
        "id": "0b7581c1-3624-405b-8a04-dd4512d856e4",
        "name": "Filter Test Shelter 1 1749143347460",
        "type": "shelter",
        "description": "Test shelter 1 for filtering",
        "logo": null,
        "address": "100 Filter Street",
        "phone": "+1234567890",
        "email": "filter-shelter-0-1749143347460@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:09:07.840Z",
        "updatedAt": "2025-06-05T17:09:07.840Z",
        "memberships": []
      },
      {
        "id": "f2deed0b-eaab-42bc-98ea-b916804ea6d2",
        "name": "Conversations Test Org",
        "type": "shelter",
        "description": "Organization for conversation testing",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "conversations-test@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T22:54:21.427Z",
        "updatedAt": "2025-05-27T22:54:21.427Z",
        "memberships": [
          {
            "id": "e64b46dc-d38e-4ddb-99a7-5dca4cf72e65",
            "userId": "jjK7dPkMTWW1qM2bVKjoVOFrqxC2",
            "organizationId": "f2deed0b-eaab-42bc-98ea-b916804ea6d2",
            "role": "member",
            "status": "active",
            "createdAt": "2025-05-27T22:54:27.435Z",
            "updatedAt": "2025-05-27T22:54:27.435Z",
            "user": {
              "id": "jjK7dPkMTWW1qM2bVKjoVOFrqxC2",
              "email": "conversations-regular-1748386462765@example.com",
              "name": "Regular User",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T22:54:23.570Z",
              "updatedAt": "2025-05-27T22:54:23.570Z",
              "isSuperAdmin": false
            }
          },
          {
            "id": "f6dc7414-d340-40a6-af8d-bf78cc99a7ae",
            "userId": "aWyJmXr8Vsh6HvxIzqO0lLIDfH22",
            "organizationId": "f2deed0b-eaab-42bc-98ea-b916804ea6d2",
            "role": "moderator",
            "status": "active",
            "createdAt": "2025-05-27T22:54:28.094Z",
            "updatedAt": "2025-05-27T22:54:28.094Z",
            "user": {
              "id": "aWyJmXr8Vsh6HvxIzqO0lLIDfH22",
              "email": "conversations-moderator-1748386464496@example.com",
              "name": "Moderator User",
              "role": "moderator",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T22:54:25.348Z",
              "updatedAt": "2025-05-27T22:54:26.663Z",
              "isSuperAdmin": false
            }
          }
        ]
      },
      {
        "id": "67a112fa-85bf-49cf-a8b6-0dd94cfddded",
        "name": "Conversations Test Org 2",
        "type": "shelter",
        "description": "Second organization for conversation testing",
        "logo": null,
        "address": null,
        "phone": null,
        "email": "conversations-test2@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T22:54:22.687Z",
        "updatedAt": "2025-05-27T22:54:22.687Z",
        "memberships": []
      },
      {
        "id": "16e7ec49-cec9-4e9c-af9f-046768df5815",
        "name": "Test Org for Memberships 1749162524471",
        "type": "shelter",
        "description": "Organization for membership testing",
        "logo": null,
        "address": "123 Membership Test Street",
        "phone": "+1234567890",
        "email": "test-org-1749162524471@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T22:28:45.271Z",
        "updatedAt": "2025-06-05T22:28:45.271Z",
        "memberships": [
          {
            "id": "7bc35a01-648e-402b-8dfe-59bfd2626022",
            "userId": "CzlwHVHB2OVt3tYCxq2RZ6SPRqw1",
            "organizationId": "16e7ec49-cec9-4e9c-af9f-046768df5815",
            "role": "member",
            "status": "active",
            "createdAt": "2025-06-05T22:28:47.489Z",
            "updatedAt": "2025-06-05T22:28:47.489Z",
            "user": {
              "id": "CzlwHVHB2OVt3tYCxq2RZ6SPRqw1",
              "email": "invite-user-1749162525823@example.com",
              "name": "User to Invite",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-06-05T22:28:46.456Z",
              "updatedAt": "2025-06-05T22:28:46.456Z",
              "isSuperAdmin": false
            }
          },
          {
            "id": "6af4aa16-9f33-4f71-8974-29f43dd1d6ea",
            "userId": "I3254DDIoGbL2XLnRlDaqy47j7h1",
            "organizationId": "16e7ec49-cec9-4e9c-af9f-046768df5815",
            "role": "admin",
            "status": "active",
            "createdAt": "2025-06-05T22:28:51.208Z",
            "updatedAt": "2025-06-05T22:28:51.208Z",
            "user": {
              "id": "I3254DDIoGbL2XLnRlDaqy47j7h1",
              "email": "admin-user-1749162529695@example.com",
              "name": "Admin User",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-06-05T22:28:50.196Z",
              "updatedAt": "2025-06-05T22:28:50.196Z",
              "isSuperAdmin": false
            }
          },
          {
            "id": "4209a3ec-6747-4a37-ac56-4ac498bdaba3",
            "userId": "IeQ7YvYJ72gOOE6PldfgfDDT69W2",
            "organizationId": "16e7ec49-cec9-4e9c-af9f-046768df5815",
            "role": "volunteer",
            "status": "active",
            "createdAt": "2025-06-05T22:28:56.165Z",
            "updatedAt": "2025-06-05T22:28:56.165Z",
            "user": {
              "id": "IeQ7YvYJ72gOOE6PldfgfDDT69W2",
              "email": "remove-user-1749162534551@example.com",
              "name": "User for Removal",
              "role": "user",
              "status": "active",
              "profileImage": null,
              "phone": null,
              "address": null,
              "blockedUsers": [],
              "preferredLanguage": "en",
              "createdAt": "2025-06-05T22:28:55.176Z",
              "updatedAt": "2025-06-05T22:28:55.176Z",
              "isSuperAdmin": false
            }
          }
        ]
      },
      {
        "id": "fa018481-7297-40b2-80dd-0caf8fd97b62",
        "name": "Filter Test Shelter 2 1749143347911",
        "type": "shelter",
        "description": "Test shelter 2 for filtering",
        "logo": null,
        "address": "101 Filter Street",
        "phone": "+1234567891",
        "email": "filter-shelter-1-1749143347911@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:09:08.324Z",
        "updatedAt": "2025-06-05T17:09:08.324Z",
        "memberships": []
      },
      {
        "id": "a0446b39-9fdc-4927-92d1-ebf85ccba4fa",
        "name": "Filter Test Shelter 3 1749143348395",
        "type": "shelter",
        "description": "Test shelter 3 for filtering",
        "logo": null,
        "address": "102 Filter Street",
        "phone": "+1234567892",
        "email": "filter-shelter-2-1749143348395@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:09:08.758Z",
        "updatedAt": "2025-06-05T17:09:08.758Z",
        "memberships": []
      },
      {
        "id": "641d01be-fefb-4554-8b08-a1b0bc64142c",
        "name": "Integration Test Shelter 1749143361016",
        "type": "shelter",
        "description": "Shelter for integration testing",
        "logo": null,
        "address": "789 Integration Street",
        "phone": "+1555123456",
        "email": "integration-shelter-1749143361016@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:09:21.494Z",
        "updatedAt": "2025-06-05T17:09:21.494Z",
        "memberships": []
      },
      {
        "id": "a1278192-3285-4044-a449-26ea13cc1c08",
        "name": "Permissions Test Shelter 1749143362548",
        "type": "shelter",
        "description": "Shelter for permissions testing",
        "logo": null,
        "address": "321 Permissions Ave",
        "phone": "+1555987654",
        "email": "permissions-shelter-1749143362548@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:09:22.978Z",
        "updatedAt": "2025-06-05T17:09:22.978Z",
        "memberships": []
      },
      {
        "id": "5ed41806-9765-470b-8c0c-90175a5ca7cc",
        "name": "Multi Shelter 1 1749143364561",
        "type": "shelter",
        "description": "Shelter 1 for multi-org testing",
        "logo": null,
        "address": "400 Multi Street",
        "phone": "+1555123450",
        "email": "multi-shelter-0-1749143364561@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:09:25.068Z",
        "updatedAt": "2025-06-05T17:09:25.068Z",
        "memberships": []
      },
      {
        "id": "1dc4ac93-e384-4636-9917-9f526348b641",
        "name": "Multi Shelter 2 1749143365133",
        "type": "shelter",
        "description": "Shelter 2 for multi-org testing",
        "logo": null,
        "address": "401 Multi Street",
        "phone": "+1555123451",
        "email": "multi-shelter-1-1749143365133@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:09:25.576Z",
        "updatedAt": "2025-06-05T17:09:25.576Z",
        "memberships": []
      },
      {
        "id": "dc4ce66a-a681-4f13-b630-01462cb0b16a",
        "name": "Multi Shelter 3 1749143365644",
        "type": "shelter",
        "description": "Shelter 3 for multi-org testing",
        "logo": null,
        "address": "402 Multi Street",
        "phone": "+1555123452",
        "email": "multi-shelter-2-1749143365644@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:09:26.253Z",
        "updatedAt": "2025-06-05T17:09:26.253Z",
        "memberships": []
      },
      {
        "id": "53f5b771-5142-44d1-84f3-274689b5f50f",
        "name": "Legacy Org 1749143366330",
        "type": "shelter",
        "description": "Organization created without explicit type",
        "logo": null,
        "address": "123 Legacy Street",
        "phone": "+1555000000",
        "email": "legacy-org-1749143366330@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:09:26.757Z",
        "updatedAt": "2025-06-05T17:09:26.757Z",
        "memberships": []
      },
      {
        "id": "9679a2ee-0eb8-41dc-8812-add00b88cd33",
        "name": "Update Test Org 1749143366824",
        "type": "shelter",
        "description": "Organization for update testing",
        "logo": null,
        "address": "999 Update Ave",
        "phone": "+1555999999",
        "email": "update-test-1749143366824@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:09:27.321Z",
        "updatedAt": "2025-06-05T17:09:27.321Z",
        "memberships": []
      },
      {
        "id": "4100d808-2779-4929-a9de-d8de044f257f",
        "name": "Test Org for Memberships 1749143380463",
        "type": "shelter",
        "description": "Organization for membership testing",
        "logo": null,
        "address": "123 Membership Test Street",
        "phone": "+1234567890",
        "email": "test-org-1749143380463@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:09:40.994Z",
        "updatedAt": "2025-06-05T17:09:40.994Z",
        "memberships": []
      },
      {
        "id": "34986d78-0d1c-455f-9bce-49b381819f90",
        "name": "Other Org 1749143387120",
        "type": "shelter",
        "description": "Other organization for cross-access test",
        "logo": null,
        "address": "789 Other Org Boulevard",
        "phone": "+1122334455",
        "email": "other-org-1749143387120@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "ji8TMXeJ92fLGKJmNlBizZ4hILo1",
        "createdAt": "2025-06-05T17:09:47.459Z",
        "updatedAt": "2025-06-05T17:09:47.459Z",
        "memberships": []
      },
      {
        "id": "3a33c8e4-fbe6-4afc-8b76-97f49816d6fc",
        "name": "Pets Test Organization 1749143402930",
        "type": "shelter",
        "description": "Organization for pets E2E testing",
        "logo": null,
        "address": "123 Pets Test Street",
        "phone": "+1234567890",
        "email": "pets-test-1749143402930@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:10:03.409Z",
        "updatedAt": "2025-06-05T17:10:03.409Z",
        "memberships": []
      },
      {
        "id": "99739b6f-56e4-48cf-8d0b-712e049ff48a",
        "name": "Conversations Test Org",
        "type": "shelter",
        "description": "Organization for conversation testing",
        "logo": null,
        "address": "123 Conversations Test Street",
        "phone": "+1234567890",
        "email": "conversations-test@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:10:17.998Z",
        "updatedAt": "2025-06-05T17:10:17.998Z",
        "memberships": []
      },
      {
        "id": "526cdb66-2066-4c7b-a4ba-1a1d099ec477",
        "name": "Messages Test Org",
        "type": "shelter",
        "description": "Organization for message testing",
        "logo": null,
        "address": "123 Messages Test Street",
        "phone": "+1234567890",
        "email": "messages-test@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:10:23.693Z",
        "updatedAt": "2025-06-05T17:10:23.693Z",
        "memberships": []
      },
      {
        "id": "304e1410-35f6-4964-b726-1f489b21515a",
        "name": "Test Organization 1749143648545",
        "type": "shelter",
        "description": "Test organization for E2E testing",
        "logo": null,
        "address": "123 Test Street",
        "phone": "+1234567890",
        "email": "test@organization.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:14:09.163Z",
        "updatedAt": "2025-06-05T17:14:09.163Z",
        "memberships": []
      },
      {
        "id": "f315c3d0-b516-4dc3-99a7-e356908eba68",
        "name": "User Org 1749143649914",
        "type": "shelter",
        "description": "Organization created by regular user",
        "logo": null,
        "address": "789 User Street",
        "phone": "+1555666777",
        "email": "user-org-1749143649914@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "mVWMMUhaHpXicQOlIYrhVI16zxg1",
        "createdAt": "2025-06-05T17:14:10.255Z",
        "updatedAt": "2025-06-05T17:14:10.255Z",
        "memberships": []
      },
      {
        "id": "799df170-3f22-4872-915a-f7d18df8b6a7",
        "name": "Explicit Shelter 1749143650319",
        "type": "shelter",
        "description": "Shelter with explicit type",
        "logo": null,
        "address": "456 Shelter Avenue",
        "phone": "+1987654321",
        "email": "explicit-shelter-1749143650319@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:14:10.773Z",
        "updatedAt": "2025-06-05T17:14:10.773Z",
        "memberships": []
      },
      {
        "id": "98ff793f-36f8-4d4e-895f-e5696ddb82bf",
        "name": "Get Test Org 1749143650905",
        "type": "shelter",
        "description": "Organization for get tests",
        "logo": null,
        "address": "321 Get Test Avenue",
        "phone": "+1888999000",
        "email": "get-test-org-1749143650905@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:14:11.347Z",
        "updatedAt": "2025-06-05T17:14:11.347Z",
        "memberships": []
      },
      {
        "id": "ab97b17d-35d6-4de0-ae1c-fee439286c7f",
        "name": "Update Test Org 1749143652340",
        "type": "shelter",
        "description": "Organization for update tests",
        "logo": null,
        "address": "456 Update Test Boulevard",
        "phone": "+1777888999",
        "email": "update-test-org-1749143652340@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:14:12.757Z",
        "updatedAt": "2025-06-05T17:14:12.757Z",
        "memberships": []
      },
      {
        "id": "e83bfa94-432e-4dc6-9744-a334f6f7feb4",
        "name": "Delete Test Org 1749143653549",
        "type": "shelter",
        "description": "Organization for delete tests",
        "logo": null,
        "address": "789 Delete Test Street",
        "phone": "+1333444555",
        "email": "delete-test-org-1749143653549@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:14:13.933Z",
        "updatedAt": "2025-06-05T17:14:13.933Z",
        "memberships": []
      },
      {
        "id": "e8d0015d-7399-4868-b878-3436e26623e7",
        "name": "No Delete Perm Org 1749143654387",
        "type": "shelter",
        "description": "Organization for permission test",
        "logo": null,
        "address": "999 Permission Test Lane",
        "phone": "+1666777888",
        "email": "no-delete-perm-org-1749143654387@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:14:14.777Z",
        "updatedAt": "2025-06-05T17:14:14.777Z",
        "memberships": []
      },
      {
        "id": "a364d00c-66cb-450d-972e-a44ec883d715",
        "name": "Members Test Org 1749143656320",
        "type": "shelter",
        "description": "Organization for members tests",
        "logo": null,
        "address": "111 Members Test Road",
        "phone": "+1222333444",
        "email": "members-test-org-1749143656320@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:14:16.765Z",
        "updatedAt": "2025-06-05T17:14:16.765Z",
        "memberships": []
      },
      {
        "id": "ecbb3902-5ecf-4a8c-947d-6f391ded8861",
        "name": "Org1 1749143660120",
        "type": "shelter",
        "description": "First organization for multitenant test",
        "logo": null,
        "address": "123 Org1 Street",
        "phone": "+1111222333",
        "email": "org1-1749143660120@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "UdqGkWMboTSmyQH9IfNrOE8z2oy1",
        "createdAt": "2025-06-05T17:14:20.511Z",
        "updatedAt": "2025-06-05T17:14:20.511Z",
        "memberships": []
      },
      {
        "id": "7c52455f-7685-4f2d-8f5e-a6d7e5a4c6d4",
        "name": "Org2 1749143660571",
        "type": "shelter",
        "description": "Second organization for multitenant test",
        "logo": null,
        "address": "456 Org2 Avenue",
        "phone": "+1444555666",
        "email": "org2-1749143660571@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "FiWTWnJnKgRC2MvB4bxbBigKbw12",
        "createdAt": "2025-06-05T17:14:20.924Z",
        "updatedAt": "2025-06-05T17:14:20.924Z",
        "memberships": []
      },
      {
        "id": "82fb04ad-df76-4481-8183-5e842557c6c3",
        "name": "Test Organization 1749144332381",
        "type": "shelter",
        "description": "Test organization for E2E testing",
        "logo": null,
        "address": "123 Test Street",
        "phone": "+1234567890",
        "email": "test@organization.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:25:32.826Z",
        "updatedAt": "2025-06-05T17:25:32.826Z",
        "memberships": []
      },
      {
        "id": "f5b5ceb6-eae7-4ec7-b47b-7179d8420035",
        "name": "User Org 1749144333718",
        "type": "shelter",
        "description": "Organization created by regular user",
        "logo": null,
        "address": "789 User Street",
        "phone": "+1555666777",
        "email": "user-org-1749144333718@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "lJnTD8jUCBOCYzD4Ee9EWrgwyGc2",
        "createdAt": "2025-06-05T17:25:34.053Z",
        "updatedAt": "2025-06-05T17:25:34.053Z",
        "memberships": []
      },
      {
        "id": "c8585f27-93b1-463d-adf4-f1582d3c4533",
        "name": "Explicit Shelter 1749144334123",
        "type": "shelter",
        "description": "Shelter with explicit type",
        "logo": null,
        "address": "456 Shelter Avenue",
        "phone": "+1987654321",
        "email": "explicit-shelter-1749144334123@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:25:34.550Z",
        "updatedAt": "2025-06-05T17:25:34.550Z",
        "memberships": []
      },
      {
        "id": "7e3fab90-034d-4da1-8f7b-c50f76e84345",
        "name": "Get Test Org 1749144334681",
        "type": "shelter",
        "description": "Organization for get tests",
        "logo": null,
        "address": "321 Get Test Avenue",
        "phone": "+1888999000",
        "email": "get-test-org-1749144334681@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:25:35.227Z",
        "updatedAt": "2025-06-05T17:25:35.227Z",
        "memberships": []
      },
      {
        "id": "79b3dca0-384d-41ba-942c-be61f759d4a4",
        "name": "Update Test Org 1749144336324",
        "type": "shelter",
        "description": "Organization for update tests",
        "logo": null,
        "address": "456 Update Test Boulevard",
        "phone": "+1777888999",
        "email": "update-test-org-1749144336324@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:25:36.829Z",
        "updatedAt": "2025-06-05T17:25:36.829Z",
        "memberships": []
      },
      {
        "id": "de35582f-244e-4b43-9a83-64c776dc8156",
        "name": "Delete Test Org 1749144337829",
        "type": "shelter",
        "description": "Organization for delete tests",
        "logo": null,
        "address": "789 Delete Test Street",
        "phone": "+1333444555",
        "email": "delete-test-org-1749144337829@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:25:38.218Z",
        "updatedAt": "2025-06-05T17:25:38.218Z",
        "memberships": []
      },
      {
        "id": "9d8c248a-1d87-4659-aacc-98b22ac94f79",
        "name": "No Delete Perm Org 1749144338772",
        "type": "shelter",
        "description": "Organization for permission test",
        "logo": null,
        "address": "999 Permission Test Lane",
        "phone": "+1666777888",
        "email": "no-delete-perm-org-1749144338772@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:25:39.179Z",
        "updatedAt": "2025-06-05T17:25:39.179Z",
        "memberships": []
      },
      {
        "id": "5e155c12-75a0-49e6-b946-ed2d3ae15588",
        "name": "Members Test Org 1749144340883",
        "type": "shelter",
        "description": "Organization for members tests",
        "logo": null,
        "address": "111 Members Test Road",
        "phone": "+1222333444",
        "email": "members-test-org-1749144340883@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:25:41.309Z",
        "updatedAt": "2025-06-05T17:25:41.309Z",
        "memberships": []
      },
      {
        "id": "efa4cb45-404a-428d-b4d3-ea88722a1b60",
        "name": "Org1 1749144344750",
        "type": "shelter",
        "description": "First organization for multitenant test",
        "logo": null,
        "address": "123 Org1 Street",
        "phone": "+1111222333",
        "email": "org1-1749144344750@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "mYNBNdlIRgYHMQnPYDXz6ZNkHeJ2",
        "createdAt": "2025-06-05T17:25:45.119Z",
        "updatedAt": "2025-06-05T17:25:45.119Z",
        "memberships": []
      },
      {
        "id": "b94da16c-1389-4a9d-90a7-b4ee99557bf4",
        "name": "Org2 1749144345187",
        "type": "shelter",
        "description": "Second organization for multitenant test",
        "logo": null,
        "address": "456 Org2 Avenue",
        "phone": "+1444555666",
        "email": "org2-1749144345187@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "0Y4qngObjOXPUd4QqezDtCOx6bf2",
        "createdAt": "2025-06-05T17:25:45.533Z",
        "updatedAt": "2025-06-05T17:25:45.533Z",
        "memberships": []
      },
      {
        "id": "66696059-c6cc-4471-8f0e-fe888ea40e4c",
        "name": "Test Organization 1749144501752",
        "type": "shelter",
        "description": "Test organization for E2E testing",
        "logo": null,
        "address": "123 Test Street",
        "phone": "+1234567890",
        "email": "test@organization.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:28:22.439Z",
        "updatedAt": "2025-06-05T17:28:22.439Z",
        "memberships": []
      },
      {
        "id": "303cc2cd-e3ba-410c-a824-fb332b44a1f9",
        "name": "User Org 1749144503382",
        "type": "shelter",
        "description": "Organization created by regular user",
        "logo": null,
        "address": "789 User Street",
        "phone": "+1555666777",
        "email": "user-org-1749144503382@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "lXF3xSQ62VNEiaj1G838M6MBAvr2",
        "createdAt": "2025-06-05T17:28:23.767Z",
        "updatedAt": "2025-06-05T17:28:23.767Z",
        "memberships": []
      },
      {
        "id": "6eea89e5-0ae2-416b-81e9-43581806ef39",
        "name": "Explicit Shelter 1749144503861",
        "type": "shelter",
        "description": "Shelter with explicit type",
        "logo": null,
        "address": "456 Shelter Avenue",
        "phone": "+1987654321",
        "email": "explicit-shelter-1749144503861@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:28:24.703Z",
        "updatedAt": "2025-06-05T17:28:24.703Z",
        "memberships": []
      },
      {
        "id": "d478489b-552c-4cd1-8dc4-5f528f63640d",
        "name": "Get Test Org 1749144504896",
        "type": "shelter",
        "description": "Organization for get tests",
        "logo": null,
        "address": "321 Get Test Avenue",
        "phone": "+1888999000",
        "email": "get-test-org-1749144504896@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:28:25.310Z",
        "updatedAt": "2025-06-05T17:28:25.310Z",
        "memberships": []
      },
      {
        "id": "c8fb0a5d-3be5-47a2-a797-b8f6c732c872",
        "name": "Update Test Org 1749144506378",
        "type": "shelter",
        "description": "Organization for update tests",
        "logo": null,
        "address": "456 Update Test Boulevard",
        "phone": "+1777888999",
        "email": "update-test-org-1749144506378@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:28:27.151Z",
        "updatedAt": "2025-06-05T17:28:27.151Z",
        "memberships": []
      },
      {
        "id": "d25fc7f3-94bb-472c-baf2-b2a7a21df8ae",
        "name": "Delete Test Org 1749144508011",
        "type": "shelter",
        "description": "Organization for delete tests",
        "logo": null,
        "address": "789 Delete Test Street",
        "phone": "+1333444555",
        "email": "delete-test-org-1749144508011@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:28:28.461Z",
        "updatedAt": "2025-06-05T17:28:28.461Z",
        "memberships": []
      },
      {
        "id": "466bf733-de14-414f-9ad9-712eb05fca24",
        "name": "No Delete Perm Org 1749144508937",
        "type": "shelter",
        "description": "Organization for permission test",
        "logo": null,
        "address": "999 Permission Test Lane",
        "phone": "+1666777888",
        "email": "no-delete-perm-org-1749144508937@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:28:29.346Z",
        "updatedAt": "2025-06-05T17:28:29.346Z",
        "memberships": []
      },
      {
        "id": "a254d3a9-0a58-4ad3-a097-b568e215ef9a",
        "name": "Members Test Org 1749144511222",
        "type": "shelter",
        "description": "Organization for members tests",
        "logo": null,
        "address": "111 Members Test Road",
        "phone": "+1222333444",
        "email": "members-test-org-1749144511222@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:28:31.685Z",
        "updatedAt": "2025-06-05T17:28:31.685Z",
        "memberships": []
      },
      {
        "id": "c46cee0b-1393-4827-a1a0-828fc2c573ef",
        "name": "Org1 1749144515119",
        "type": "shelter",
        "description": "First organization for multitenant test",
        "logo": null,
        "address": "123 Org1 Street",
        "phone": "+1111222333",
        "email": "org1-1749144515119@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "xM0y1cmThaXjmzkN6iHdWmiBIMD2",
        "createdAt": "2025-06-05T17:28:35.460Z",
        "updatedAt": "2025-06-05T17:28:35.460Z",
        "memberships": []
      },
      {
        "id": "ee1acd61-83b7-499a-a5b0-8d74cdf14bc3",
        "name": "Org2 1749144515524",
        "type": "shelter",
        "description": "Second organization for multitenant test",
        "logo": null,
        "address": "456 Org2 Avenue",
        "phone": "+1444555666",
        "email": "org2-1749144515524@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "sqPCSAeyUYSTfqt60ITodTdXGQL2",
        "createdAt": "2025-06-05T17:28:35.887Z",
        "updatedAt": "2025-06-05T17:28:35.887Z",
        "memberships": []
      },
      {
        "id": "9c4868c2-8296-4717-93c0-e1f5752c50b9",
        "name": "Conversations Test Org",
        "type": "shelter",
        "description": "Organization for conversation testing",
        "logo": null,
        "address": "123 Conversations Test Street",
        "phone": "+1234567890",
        "email": "conversations-test@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T18:18:15.872Z",
        "updatedAt": "2025-06-05T18:18:15.872Z",
        "memberships": []
      },
      {
        "id": "751ec56e-562e-4a7d-86a6-b03572349b08",
        "name": "Get Test Org 1749144827698",
        "type": "shelter",
        "description": "Organization for get tests",
        "logo": null,
        "address": "321 Get Test Avenue",
        "phone": "+1888999000",
        "email": "get-test-org-1749144827698@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:33:48.124Z",
        "updatedAt": "2025-06-05T17:33:48.124Z",
        "memberships": []
      },
      {
        "id": "5775e643-a597-4432-8bb5-637d8e741a4c",
        "name": "Update Test Org 1749144829323",
        "type": "shelter",
        "description": "Organization for update tests",
        "logo": null,
        "address": "456 Update Test Boulevard",
        "phone": "+1777888999",
        "email": "update-test-org-1749144829323@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:33:49.752Z",
        "updatedAt": "2025-06-05T17:33:49.752Z",
        "memberships": []
      },
      {
        "id": "33214533-d0c5-44d0-8c8d-bfb51a58eac2",
        "name": "Delete Test Org 1749144830794",
        "type": "shelter",
        "description": "Organization for delete tests",
        "logo": null,
        "address": "789 Delete Test Street",
        "phone": "+1333444555",
        "email": "delete-test-org-1749144830794@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:33:51.257Z",
        "updatedAt": "2025-06-05T17:33:51.257Z",
        "memberships": []
      },
      {
        "id": "fac8c130-dbd9-4ef0-a613-b1052fc9e69a",
        "name": "No Delete Perm Org 1749144831765",
        "type": "shelter",
        "description": "Organization for permission test",
        "logo": null,
        "address": "999 Permission Test Lane",
        "phone": "+1666777888",
        "email": "no-delete-perm-org-1749144831765@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:33:52.281Z",
        "updatedAt": "2025-06-05T17:33:52.281Z",
        "memberships": []
      },
      {
        "id": "8b1490be-8ab6-44d8-a44c-70a92e61637e",
        "name": "Members Test Org 1749144833953",
        "type": "shelter",
        "description": "Organization for members tests",
        "logo": null,
        "address": "111 Members Test Road",
        "phone": "+1222333444",
        "email": "members-test-org-1749144833953@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:33:54.441Z",
        "updatedAt": "2025-06-05T17:33:54.441Z",
        "memberships": []
      },
      {
        "id": "eaed725e-0d29-4d72-8600-be50eb526ce7",
        "name": "Org1 1749144838005",
        "type": "shelter",
        "description": "First organization for multitenant test",
        "logo": null,
        "address": "123 Org1 Street",
        "phone": "+1111222333",
        "email": "org1-1749144838005@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "HalBFr1YmTcpamJOfvV02pKcB9B2",
        "createdAt": "2025-06-05T17:33:58.369Z",
        "updatedAt": "2025-06-05T17:33:58.369Z",
        "memberships": []
      },
      {
        "id": "f97355e3-b6c5-4aef-8b05-412d0abe4f4a",
        "name": "Org2 1749144838437",
        "type": "shelter",
        "description": "Second organization for multitenant test",
        "logo": null,
        "address": "456 Org2 Avenue",
        "phone": "+1444555666",
        "email": "org2-1749144838437@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "QxN7048RFHTPrvuABxCY9i82wOk1",
        "createdAt": "2025-06-05T17:33:58.933Z",
        "updatedAt": "2025-06-05T17:33:58.933Z",
        "memberships": []
      },
      {
        "id": "70a5421b-e81f-430c-8b12-bc0ec6967645",
        "name": "No Delete Perm Org 1749145109850",
        "type": "shelter",
        "description": "Organization for permission test",
        "logo": null,
        "address": "999 Permission Test Lane",
        "phone": "+1666777888",
        "email": "no-delete-perm-org-1749145109850@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:38:30.284Z",
        "updatedAt": "2025-06-05T17:38:30.284Z",
        "memberships": []
      },
      {
        "id": "38f2e679-f312-48b5-8e14-82be2045ae0b",
        "name": "Test Org for Memberships 1749162435195",
        "type": "shelter",
        "description": "Organization for membership testing",
        "logo": null,
        "address": "123 Membership Test Street",
        "phone": "+1234567890",
        "email": "test-org-1749162435195@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T22:27:15.929Z",
        "updatedAt": "2025-06-05T22:27:15.929Z",
        "memberships": []
      },
      {
        "id": "1fcac7b9-1794-4f18-a619-74c0db02d9de",
        "name": "Other Org 1749162443665",
        "type": "shelter",
        "description": "Other organization for cross-access test",
        "logo": null,
        "address": "789 Other Org Boulevard",
        "phone": "+1122334455",
        "email": "other-org-1749162443665@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "KBs5vlhSJzLnfOzjXPU3XFNGQ1q1",
        "createdAt": "2025-06-05T22:27:24.241Z",
        "updatedAt": "2025-06-05T22:27:24.241Z",
        "memberships": []
      },
      {
        "id": "ddfbe280-888f-4bd1-9b2f-7d4e1ef49503",
        "name": "Test Shelter 1749824334786",
        "type": "shelter",
        "description": "Test shelter for E2E testing",
        "logo": null,
        "address": "123 Shelter Street",
        "phone": "+1234567890",
        "email": "test-shelter-1749824334786@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-13T14:18:55.226Z",
        "updatedAt": "2025-06-13T14:18:55.226Z",
        "memberships": []
      },
      {
        "id": "ac407d6b-1710-4492-9730-0d10c856c928",
        "name": "Default Type Org 1749824335914",
        "type": "shelter",
        "description": "Organization without explicit type",
        "logo": null,
        "address": "123 Default Street",
        "phone": "+1234567890",
        "email": "default-type-1749824335914@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-13T14:18:56.438Z",
        "updatedAt": "2025-06-13T14:18:56.438Z",
        "memberships": []
      },
      {
        "id": "ee475662-d482-4d7a-9256-4feeb52294da",
        "name": "Update Type Test Org 1749824337838",
        "type": "shelter",
        "description": "Organization for type update tests",
        "logo": null,
        "address": "456 Update Street",
        "phone": "+9876543210",
        "email": "update-type-test-1749824337838@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-13T14:18:58.190Z",
        "updatedAt": "2025-06-13T14:18:58.190Z",
        "memberships": []
      },
      {
        "id": "bf643300-8995-4d78-9b52-33b3f5aa4186",
        "name": "Filter Test Shelter 1 1749824339118",
        "type": "shelter",
        "description": "Test shelter 1 for filtering",
        "logo": null,
        "address": "100 Filter Street",
        "phone": "+1234567890",
        "email": "filter-shelter-0-1749824339118@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-13T14:18:59.513Z",
        "updatedAt": "2025-06-13T14:18:59.513Z",
        "memberships": []
      },
      {
        "id": "a58fb8f2-ed59-497a-b0de-0aad82b35594",
        "name": "Filter Test Shelter 2 1749824339609",
        "type": "shelter",
        "description": "Test shelter 2 for filtering",
        "logo": null,
        "address": "101 Filter Street",
        "phone": "+1234567891",
        "email": "filter-shelter-1-1749824339609@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-13T14:19:00.086Z",
        "updatedAt": "2025-06-13T14:19:00.086Z",
        "memberships": []
      },
      {
        "id": "a52f6896-dc20-48a6-bde0-f76a9cd242bc",
        "name": "Filter Test Shelter 3 1749824340156",
        "type": "shelter",
        "description": "Test shelter 3 for filtering",
        "logo": null,
        "address": "102 Filter Street",
        "phone": "+1234567892",
        "email": "filter-shelter-2-1749824340156@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-13T14:19:00.524Z",
        "updatedAt": "2025-06-13T14:19:00.524Z",
        "memberships": []
      },
      {
        "id": "f76f0620-ae00-4f3a-8c4e-d068cd3dc267",
        "name": "Test Shelter 1749825854978",
        "type": "shelter",
        "description": "Test shelter for E2E testing",
        "logo": null,
        "address": "123 Shelter Street",
        "phone": "+1234567890",
        "email": "test-shelter-1749825854978@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-13T14:44:15.421Z",
        "updatedAt": "2025-06-13T14:44:15.421Z",
        "memberships": []
      },
      {
        "id": "831e4556-c9f3-4f10-a9db-1eeada026601",
        "name": "Default Type Org 1749825855993",
        "type": "shelter",
        "description": "Organization without explicit type",
        "logo": null,
        "address": "123 Default Street",
        "phone": "+1234567890",
        "email": "default-type-1749825855993@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-13T14:44:16.419Z",
        "updatedAt": "2025-06-13T14:44:16.419Z",
        "memberships": []
      },
      {
        "id": "28ec945a-167a-4f3a-a0db-75b2a8c5e1f8",
        "name": "Update Type Test Org 1749825857773",
        "type": "shelter",
        "description": "Organization for type update tests",
        "logo": null,
        "address": "456 Update Street",
        "phone": "+9876543210",
        "email": "update-type-test-1749825857773@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-13T14:44:18.262Z",
        "updatedAt": "2025-06-13T14:44:18.262Z",
        "memberships": []
      },
      {
        "id": "e3577c17-fc21-4890-a484-2f71a059cb64",
        "name": "Filter Test Shelter 1 1749825859140",
        "type": "shelter",
        "description": "Test shelter 1 for filtering",
        "logo": null,
        "address": "100 Filter Street",
        "phone": "+1234567890",
        "email": "filter-shelter-0-1749825859140@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-13T14:44:19.535Z",
        "updatedAt": "2025-06-13T14:44:19.535Z",
        "memberships": []
      },
      {
        "id": "2901f07d-08e0-444b-96b1-43b5d9fb4c3d",
        "name": "Filter Test Shelter 2 1749825859601",
        "type": "shelter",
        "description": "Test shelter 2 for filtering",
        "logo": null,
        "address": "101 Filter Street",
        "phone": "+1234567891",
        "email": "filter-shelter-1-1749825859601@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-13T14:44:20.089Z",
        "updatedAt": "2025-06-13T14:44:20.089Z",
        "memberships": []
      },
      {
        "id": "0434ae87-a052-4c89-a3eb-bf504ab52088",
        "name": "Filter Test Shelter 3 1749825860161",
        "type": "shelter",
        "description": "Test shelter 3 for filtering",
        "logo": null,
        "address": "102 Filter Street",
        "phone": "+1234567892",
        "email": "filter-shelter-2-1749825860162@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-13T14:44:20.632Z",
        "updatedAt": "2025-06-13T14:44:20.632Z",
        "memberships": []
      }
    ],
    "pagination": {}
  }
}
```

**⏱️ Duration:** 682.1 ms  

</details>


---

### Test: Organization Types E2E Tests Organization Type Validation Edge Cases Should handle null type
**Status:** ✅ PASSED  
**Duration:** 0.41s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (409.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI1ODQ5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjU4NDksImV4cCI6MTc0OTgyOTQ0OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cf6g__h6KgbGQB29xfQ8uMWbqK1cZbsUOnXWIZtU1xutpFO32zQPxA30CeCoLJGQtBPrYdI2srau7cXB6rgToQb2JWDkhE_HVjNcD1OoOpO3uj8RLLL8HUMmo15t3Yr-I9vCqbeu68KPIU5_HujcEe1_1Oos575UPn0UMlWW9Owa6qodQ-4vj0EfGVKPlQ17DV7AxBMFmMP5xlJHK849TL-DN0KDP3GOOpV0WX3e_9i8ebwciYsSTTLb_ueFy9UCinWsLPljvSin_Y7Pr8XjIdHdz46rSrH7E-THAiDIhOEq-Mh0e8hLVnJsRgnOUuTQcLvHnOPz5JCExU5822Oq8w"
  },
  "data": {
    "name": "Null Type Organization",
    "type": null,
    "description": "Organization with null type",
    "email": "null-type@example.com"
  }
}
```

**📥 Response:**
```json
{
  "status": 400,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "92",
    "etag": "W/\"5c-EuxjmvJCHFCWR1NJeOW16i94MbI\"",
    "date": "Fri, 13 Jun 2025 14:44:22 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Validation failed",
    "details": [
      {
        "field": "type",
        "message": "Type must be a string"
      }
    ]
  }
}
```

**⏱️ Duration:** 409.1 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Organization Types E2E Tests Organization Type Validation Edge Cases Should handle case sensitivity
**Status:** ✅ PASSED  
**Duration:** 0.49s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (484.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI1ODQ5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjU4NDksImV4cCI6MTc0OTgyOTQ0OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cf6g__h6KgbGQB29xfQ8uMWbqK1cZbsUOnXWIZtU1xutpFO32zQPxA30CeCoLJGQtBPrYdI2srau7cXB6rgToQb2JWDkhE_HVjNcD1OoOpO3uj8RLLL8HUMmo15t3Yr-I9vCqbeu68KPIU5_HujcEe1_1Oos575UPn0UMlWW9Owa6qodQ-4vj0EfGVKPlQ17DV7AxBMFmMP5xlJHK849TL-DN0KDP3GOOpV0WX3e_9i8ebwciYsSTTLb_ueFy9UCinWsLPljvSin_Y7Pr8XjIdHdz46rSrH7E-THAiDIhOEq-Mh0e8hLVnJsRgnOUuTQcLvHnOPz5JCExU5822Oq8w"
  },
  "data": {
    "name": "Case Sensitive Type Organization",
    "type": "SHELTER",
    "description": "Organization with uppercase type",
    "email": "case-sensitive@example.com"
  }
}
```

**📥 Response:**
```json
{
  "status": 400,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "122",
    "etag": "W/\"7a-cv5Moexh9jmlV9a8h361//b+/xg\"",
    "date": "Fri, 13 Jun 2025 14:44:23 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Validation failed",
    "details": [
      {
        "field": "type",
        "message": "Invalid organization type. Valid types are: shelter"
      }
    ]
  }
}
```

**⏱️ Duration:** 484.6 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Organization Types E2E Tests Language Support Should support different languages
**Status:** ✅ PASSED  
**Duration:** 0.38s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/types/shelter (381.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI1ODQ5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjU4NDksImV4cCI6MTc0OTgyOTQ0OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cf6g__h6KgbGQB29xfQ8uMWbqK1cZbsUOnXWIZtU1xutpFO32zQPxA30CeCoLJGQtBPrYdI2srau7cXB6rgToQb2JWDkhE_HVjNcD1OoOpO3uj8RLLL8HUMmo15t3Yr-I9vCqbeu68KPIU5_HujcEe1_1Oos575UPn0UMlWW9Owa6qodQ-4vj0EfGVKPlQ17DV7AxBMFmMP5xlJHK849TL-DN0KDP3GOOpV0WX3e_9i8ebwciYsSTTLb_ueFy9UCinWsLPljvSin_Y7Pr8XjIdHdz46rSrH7E-THAiDIhOEq-Mh0e8hLVnJsRgnOUuTQcLvHnOPz5JCExU5822Oq8w",
    "Accept-Language": "en"
  }
}
```

**📥 Response:**
```json
{
  "status": 200,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "620",
    "etag": "W/\"26c-1iIjVAcq49xx4pyUvtofpkzKn1g\"",
    "date": "Fri, 13 Jun 2025 14:44:23 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "id": "shelter",
      "name": "Protectora de Animales",
      "description": "Organizaciones dedicadas al rescate, cuidado temporal y adopción de mascotas",
      "features": [
        "pet_adoption",
        "pet_rescue",
        "volunteer_management",
        "donation_tracking",
        "medical_records",
        "foster_care_coordination"
      ],
      "permissions": {
        "pets": {
          "create": true,
          "read": true,
          "update": true,
          "delete": true,
          "manage_adoption_status": true
        },
        "adoptions": {
          "process_applications": true,
          "conduct_interviews": true,
          "approve_adoptions": true
        }
      },
      "validation": {
        "requiredFields": [
          "name",
          "email",
          "address",
          "phone"
        ],
        "optionalFields": [
          "description",
          "logo"
        ]
      }
    },
    "language": "en"
  }
}
```

**⏱️ Duration:** 381.6 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/organizations/undefined (390.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI1ODQ5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjU4NDksImV4cCI6MTc0OTgyOTQ0OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cf6g__h6KgbGQB29xfQ8uMWbqK1cZbsUOnXWIZtU1xutpFO32zQPxA30CeCoLJGQtBPrYdI2srau7cXB6rgToQb2JWDkhE_HVjNcD1OoOpO3uj8RLLL8HUMmo15t3Yr-I9vCqbeu68KPIU5_HujcEe1_1Oos575UPn0UMlWW9Owa6qodQ-4vj0EfGVKPlQ17DV7AxBMFmMP5xlJHK849TL-DN0KDP3GOOpV0WX3e_9i8ebwciYsSTTLb_ueFy9UCinWsLPljvSin_Y7Pr8XjIdHdz46rSrH7E-THAiDIhOEq-Mh0e8hLVnJsRgnOUuTQcLvHnOPz5JCExU5822Oq8w"
  }
}
```

**📥 Response:**
```json
{
  "status": 400,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "86",
    "etag": "W/\"56-c65qAc7poUVdeefNsXrlFxfQepU\"",
    "date": "Fri, 13 Jun 2025 14:44:24 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Invalid organization ID",
    "details": [
      "Organization ID must be a valid UUID"
    ]
  }
}
```

**⏱️ Duration:** 390.2 ms  
**❌ Error:** Request failed with status code 400  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/organizations/undefined (431.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI1ODQ5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjU4NDksImV4cCI6MTc0OTgyOTQ0OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cf6g__h6KgbGQB29xfQ8uMWbqK1cZbsUOnXWIZtU1xutpFO32zQPxA30CeCoLJGQtBPrYdI2srau7cXB6rgToQb2JWDkhE_HVjNcD1OoOpO3uj8RLLL8HUMmo15t3Yr-I9vCqbeu68KPIU5_HujcEe1_1Oos575UPn0UMlWW9Owa6qodQ-4vj0EfGVKPlQ17DV7AxBMFmMP5xlJHK849TL-DN0KDP3GOOpV0WX3e_9i8ebwciYsSTTLb_ueFy9UCinWsLPljvSin_Y7Pr8XjIdHdz46rSrH7E-THAiDIhOEq-Mh0e8hLVnJsRgnOUuTQcLvHnOPz5JCExU5822Oq8w"
  }
}
```

**📥 Response:**
```json
{
  "status": 400,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "86",
    "etag": "W/\"56-c65qAc7poUVdeefNsXrlFxfQepU\"",
    "date": "Fri, 13 Jun 2025 14:44:24 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Invalid organization ID",
    "details": [
      "Organization ID must be a valid UUID"
    ]
  }
}
```

**⏱️ Duration:** 431.1 ms  
**❌ Error:** Request failed with status code 400  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/organizations/undefined (333.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI1ODQ5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjU4NDksImV4cCI6MTc0OTgyOTQ0OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cf6g__h6KgbGQB29xfQ8uMWbqK1cZbsUOnXWIZtU1xutpFO32zQPxA30CeCoLJGQtBPrYdI2srau7cXB6rgToQb2JWDkhE_HVjNcD1OoOpO3uj8RLLL8HUMmo15t3Yr-I9vCqbeu68KPIU5_HujcEe1_1Oos575UPn0UMlWW9Owa6qodQ-4vj0EfGVKPlQ17DV7AxBMFmMP5xlJHK849TL-DN0KDP3GOOpV0WX3e_9i8ebwciYsSTTLb_ueFy9UCinWsLPljvSin_Y7Pr8XjIdHdz46rSrH7E-THAiDIhOEq-Mh0e8hLVnJsRgnOUuTQcLvHnOPz5JCExU5822Oq8w"
  }
}
```

**📥 Response:**
```json
{
  "status": 400,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "86",
    "etag": "W/\"56-c65qAc7poUVdeefNsXrlFxfQepU\"",
    "date": "Fri, 13 Jun 2025 14:44:25 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Invalid organization ID",
    "details": [
      "Organization ID must be a valid UUID"
    ]
  }
}
```

**⏱️ Duration:** 333.1 ms  
**❌ Error:** Request failed with status code 400  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/organizations/undefined (431.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI1ODQ5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjU4NDksImV4cCI6MTc0OTgyOTQ0OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cf6g__h6KgbGQB29xfQ8uMWbqK1cZbsUOnXWIZtU1xutpFO32zQPxA30CeCoLJGQtBPrYdI2srau7cXB6rgToQb2JWDkhE_HVjNcD1OoOpO3uj8RLLL8HUMmo15t3Yr-I9vCqbeu68KPIU5_HujcEe1_1Oos575UPn0UMlWW9Owa6qodQ-4vj0EfGVKPlQ17DV7AxBMFmMP5xlJHK849TL-DN0KDP3GOOpV0WX3e_9i8ebwciYsSTTLb_ueFy9UCinWsLPljvSin_Y7Pr8XjIdHdz46rSrH7E-THAiDIhOEq-Mh0e8hLVnJsRgnOUuTQcLvHnOPz5JCExU5822Oq8w"
  }
}
```

**📥 Response:**
```json
{
  "status": 400,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "86",
    "etag": "W/\"56-c65qAc7poUVdeefNsXrlFxfQepU\"",
    "date": "Fri, 13 Jun 2025 14:44:25 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Invalid organization ID",
    "details": [
      "Organization ID must be a valid UUID"
    ]
  }
}
```

**⏱️ Duration:** 431.0 ms  
**❌ Error:** Request failed with status code 400  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/auth/login (290.3ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "daniellovazzano@gmail.com",
    "password": "PC.103638dl"
  }
}
```

**📥 Response:**
```json
{
  "status": 200,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "1706",
    "etag": "W/\"6aa-VakaOwDE46p1p9DVsJqYyBNofF4\"",
    "date": "Fri, 13 Jun 2025 14:44:25 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Login successful",
    "data": {
      "user": {
        "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "email": "daniellovazzano@gmail.com",
        "role": "admin",
        "isSuperAdmin": true
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI1ODY1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjU4NjUsImV4cCI6MTc0OTgyOTQ2NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.U6DUJ-3xWlz1OSq1EfSRc3xsPvE4jEIPGxxcHOeUMKKcfHSsiBh8mGEzGogcn_N6t_4vXer5XGR63W6RiMjyVwHp4Xw7jlio3ilO7S09gyvcPQO1guaXds_UIphQ8OGGJkWmfo3QlGndYlgV7fgKBPQdVkujG0qblFJHaGoEeG3liKNbuA4w-hwo6KG7q9RCI05-vg2O44-CUdVNjLYoBVDv-n1PlpsuMPqp8dbPCxCw-Xqr-Iv3O4vY3q10sUMG7RSU9WWVyIxSKG9hAURayujxU1mNheDjALoZiYKGj9NOOnqpiRU5z_d0DMpDW_G92uTZsbkuEq2Ko2KuIW-NGQ",
        "refreshToken": "AMf-vByGRzGyvdAfdyer_KJWTPDtaKFfOWFONolKZQWEs_dozVi9qfqGJFr2YtvoIhqU3fDL2YlttR4j4omvRBjpC7sWuJ1TtcTyiQaHzXa9QE9NaaxAKpsZGyaud9h4dsANZHD2JYucjBjRwGH-3AqMQVVRqb1QZ4zigXiHzQqmm9YFFeQNm4WwOYqsNCAfETw18sSWNA-cq5QAJeoN4h104MFEKOIEO2MdflehLh3miYkkD3mf7gP5gF4Kp-4mlfApCIKVJBQ2",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 290.3 ms  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/admin/users/5Nr4pNYWwGMvbfXmtNDqbycWLri2 (1323.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI1ODY1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjU4NjUsImV4cCI6MTc0OTgyOTQ2NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.U6DUJ-3xWlz1OSq1EfSRc3xsPvE4jEIPGxxcHOeUMKKcfHSsiBh8mGEzGogcn_N6t_4vXer5XGR63W6RiMjyVwHp4Xw7jlio3ilO7S09gyvcPQO1guaXds_UIphQ8OGGJkWmfo3QlGndYlgV7fgKBPQdVkujG0qblFJHaGoEeG3liKNbuA4w-hwo6KG7q9RCI05-vg2O44-CUdVNjLYoBVDv-n1PlpsuMPqp8dbPCxCw-Xqr-Iv3O4vY3q10sUMG7RSU9WWVyIxSKG9hAURayujxU1mNheDjALoZiYKGj9NOOnqpiRU5z_d0DMpDW_G92uTZsbkuEq2Ko2KuIW-NGQ"
  }
}
```

**📥 Response:**
```json
{
  "status": 200,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "99",
    "etag": "W/\"63-7MnfmQcA9c8HY8CUZ1LnaOiEJqM\"",
    "date": "Fri, 13 Jun 2025 14:44:27 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "message": "User and associated data deleted successfully"
    },
    "language": "en"
  }
}
```

**⏱️ Duration:** 1323.1 ms  

</details>


---



---

## Legacy Format (Payloads & Responses)

### Payloads Sent


### Curl Commands


### API Responses


---

## Status & Observations



**Observations:**
- Total organizations created: 4
- Total test users created: 1
- Organization types functionality tested
- All test data cleaned up automatically

---
*Generated automatically by Enhanced E2E Reporter*
