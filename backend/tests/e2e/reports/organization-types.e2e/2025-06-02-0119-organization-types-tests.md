# E2E Test Report: organization-types-tests

**Date:** 6/2/2025  
**Time:** 1:19:49 AM  
**Duration:** 22.15s  
**Tests:** 18 total, 18 passed, 0 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Should get all available organization types | PASSED | 1.15s | Should get all available organization types |
| ✅ Regular user should also get organization types | PASSED | 0.54s | Regular user should also get organization types |
| ✅ Should fail without authentication | PASSED | 0.15s | Should fail without authentication |
| ✅ Should get shelter type information | PASSED | 0.42s | Should get shelter type information |
| ✅ Should fail for invalid organization type | PASSED | 0.46s | Should fail for invalid organization type |
| ✅ Should fail without authentication | PASSED | 0.01s | Should fail without authentication |
| ✅ Should create shelter organization successfully | PASSED | 0.93s | Should create shelter organization successfully |
| ✅ Should create organization with default type when not specified | PASSED | 0.54s | Should create organization with default type when not specified |
| ✅ Should fail with invalid organization type | PASSED | 0.46s | Should fail with invalid organization type |
| ✅ Should validate required fields for shelter type | PASSED | 0.36s | Should validate required fields for shelter type |
| ✅ Should handle empty string type | PASSED | 0.41s | Should handle empty string type |
| ✅ Should update organization type successfully | PASSED | 0.98s | Should update organization type successfully |
| ✅ Should fail when updating to invalid type | PASSED | 0.48s | Should fail when updating to invalid type |
| ✅ Should filter organizations by shelter type | PASSED | 0.81s | Should filter organizations by shelter type |
| ✅ Should fail with invalid type filter | PASSED | 0.46s | Should fail with invalid type filter |
| ✅ Should return all organizations when no type filter is applied | PASSED | 0.74s | Should return all organizations when no type filter is applied |
| ✅ Should handle null type | PASSED | 0.43s | Should handle null type |
| ✅ Should handle case sensitivity | PASSED | 0.42s | Should handle case sensitivity |


---

## Detailed Execution Log

### Test: Should get all available organization types
**Status:** ✅ PASSED  
**Duration:** 1.15s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/types (1148.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODE5OTY3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MTk5NjcsImV4cCI6MTc0ODgyMzU2NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HpXGxy-v0ugFZvCa15BfgfDhdK_ugtlx5CSkIGGCmRGreCSYV7iRSoXjQIU-yL_i1zTqq8Vz56jg-OB3L4wWw1NKk0Pfw0ao2eZ4i4M7nYiRV_cFFrFgJ2y364N6wU1pgLDZec9TPicL39GUMqr8GDG1_1HL8kIovMXZ_wWfLAyWbERjF_4z_4zQnuYhYNZiW_KLTo3kuDZcbyGZTpJvA3HqWc-m5nwwbg0YqoKwfwUOwJVErRzaf7OFsmyYbtFuTnT8I3nOGaVKxN5SnR0Sk2blSBjeOt-Ca9R6LDekZZb43v9iEEUVwXyOWkdi0iaeGXPeBvNR1E-lHvjBiySfBg"
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "592",
    "etag": "W/\"250-19WZZCXgK2iYWlmHr5C1Etpr4oQ\"",
    "date": "Sun, 01 Jun 2025 23:19:31 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
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
  }
}
```

**⏱️ Duration:** 1148.6 ms  

</details>


---

### Test: Regular user should also get organization types
**Status:** ✅ PASSED  
**Duration:** 0.54s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/types (534.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgxOTk2OSwidXNlcl9pZCI6InU1RkFHVnpNb21ONXZHUEdoZkRDT0NjczdxMTIiLCJzdWIiOiJ1NUZBR1Z6TW9tTjV2R1BHaGZEQ09DY3M3cTEyIiwiaWF0IjoxNzQ4ODE5OTY5LCJleHAiOjE3NDg4MjM1NjksImVtYWlsIjoidGVzdC11c2VyLW9yZy10eXBlcy0xNzQ4ODE5OTY4MjYwQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QtdXNlci1vcmctdHlwZXMtMTc0ODgxOTk2ODI2MEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.FiOx7VRWEsV2oFLKzwgqBpR-i_6-pkwLUJDnfoizUH0DEYBokvHV21ck8gSw9wWhT3wEC3TDrZKAx2-afcyHSywsr4mSBd7JdpHKMhpDIKu4NOdezXEeu0uvS7dP_EjgpZsFDptkG3nvjhTmzbLt15SNpl1bMOmQZUYoCxbaYPKlMV3-EUGsYo5FdwCJV8O_03pAOnCwqci4vT_37IG24Pv4Pa0zDCuYBm_fTL5iango0FQxnK0SK0TREaRgTR6aNeZXQREd7owwLEnG8DJzI5m9rE4w-q1n8wIgLX339xR7K6G9glhzd9DS9MypkquxV-E1IeGJzFfL35jgGL1Jlg"
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "592",
    "etag": "W/\"250-19WZZCXgK2iYWlmHr5C1Etpr4oQ\"",
    "date": "Sun, 01 Jun 2025 23:19:31 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
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
  }
}
```

**⏱️ Duration:** 534.7 ms  

</details>


---

### Test: Should fail without authentication
**Status:** ✅ PASSED  
**Duration:** 0.15s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/types (153.3ms)</summary>

**📤 Request:**
```json
{}
```

**📥 Response:**
```json
{
  "status": 401,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "34",
    "etag": "W/\"22-a5AGBJ3wo9XYPif6SAp92FOHtH4\"",
    "date": "Sun, 01 Jun 2025 23:19:31 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Token no proporcionado"
  }
}
```

**⏱️ Duration:** 153.3 ms  
**❌ Error:** Request failed with status code 401  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/organizations/types/shelter (11.4ms)</summary>

**📤 Request:**
```json
{}
```

**📥 Response:**
```json
{
  "status": 401,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "34",
    "etag": "W/\"22-a5AGBJ3wo9XYPif6SAp92FOHtH4\"",
    "date": "Sun, 01 Jun 2025 23:19:32 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Token no proporcionado"
  }
}
```

**⏱️ Duration:** 11.4 ms  
**❌ Error:** Request failed with status code 401  

</details>


---

### Test: Should get shelter type information
**Status:** ✅ PASSED  
**Duration:** 0.42s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/types/shelter (416.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODE5OTY3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MTk5NjcsImV4cCI6MTc0ODgyMzU2NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HpXGxy-v0ugFZvCa15BfgfDhdK_ugtlx5CSkIGGCmRGreCSYV7iRSoXjQIU-yL_i1zTqq8Vz56jg-OB3L4wWw1NKk0Pfw0ao2eZ4i4M7nYiRV_cFFrFgJ2y364N6wU1pgLDZec9TPicL39GUMqr8GDG1_1HL8kIovMXZ_wWfLAyWbERjF_4z_4zQnuYhYNZiW_KLTo3kuDZcbyGZTpJvA3HqWc-m5nwwbg0YqoKwfwUOwJVErRzaf7OFsmyYbtFuTnT8I3nOGaVKxN5SnR0Sk2blSBjeOt-Ca9R6LDekZZb43v9iEEUVwXyOWkdi0iaeGXPeBvNR1E-lHvjBiySfBg"
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "580",
    "etag": "W/\"244-/DVhTfParn2ydMKc6F439Dx2l0I\"",
    "date": "Sun, 01 Jun 2025 23:19:32 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
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
  }
}
```

**⏱️ Duration:** 416.2 ms  

</details>


---

### Test: Should fail for invalid organization type
**Status:** ✅ PASSED  
**Duration:** 0.46s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/types/invalid_type (458.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODE5OTY3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MTk5NjcsImV4cCI6MTc0ODgyMzU2NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HpXGxy-v0ugFZvCa15BfgfDhdK_ugtlx5CSkIGGCmRGreCSYV7iRSoXjQIU-yL_i1zTqq8Vz56jg-OB3L4wWw1NKk0Pfw0ao2eZ4i4M7nYiRV_cFFrFgJ2y364N6wU1pgLDZec9TPicL39GUMqr8GDG1_1HL8kIovMXZ_wWfLAyWbERjF_4z_4zQnuYhYNZiW_KLTo3kuDZcbyGZTpJvA3HqWc-m5nwwbg0YqoKwfwUOwJVErRzaf7OFsmyYbtFuTnT8I3nOGaVKxN5SnR0Sk2blSBjeOt-Ca9R6LDekZZb43v9iEEUVwXyOWkdi0iaeGXPeBvNR1E-lHvjBiySfBg"
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "103",
    "etag": "W/\"67-wxid0twlgubWSoZd+MCVK705Ijg\"",
    "date": "Sun, 01 Jun 2025 23:19:32 GMT",
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

**⏱️ Duration:** 458.7 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should fail without authentication
**Status:** ✅ PASSED  
**Duration:** 0.01s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/types (153.3ms)</summary>

**📤 Request:**
```json
{}
```

**📥 Response:**
```json
{
  "status": 401,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "34",
    "etag": "W/\"22-a5AGBJ3wo9XYPif6SAp92FOHtH4\"",
    "date": "Sun, 01 Jun 2025 23:19:31 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Token no proporcionado"
  }
}
```

**⏱️ Duration:** 153.3 ms  
**❌ Error:** Request failed with status code 401  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/organizations/types/shelter (11.4ms)</summary>

**📤 Request:**
```json
{}
```

**📥 Response:**
```json
{
  "status": 401,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "34",
    "etag": "W/\"22-a5AGBJ3wo9XYPif6SAp92FOHtH4\"",
    "date": "Sun, 01 Jun 2025 23:19:32 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Token no proporcionado"
  }
}
```

**⏱️ Duration:** 11.4 ms  
**❌ Error:** Request failed with status code 401  

</details>


---

### Test: Should create shelter organization successfully
**Status:** ✅ PASSED  
**Duration:** 0.93s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (925.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODE5OTY3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MTk5NjcsImV4cCI6MTc0ODgyMzU2NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HpXGxy-v0ugFZvCa15BfgfDhdK_ugtlx5CSkIGGCmRGreCSYV7iRSoXjQIU-yL_i1zTqq8Vz56jg-OB3L4wWw1NKk0Pfw0ao2eZ4i4M7nYiRV_cFFrFgJ2y364N6wU1pgLDZec9TPicL39GUMqr8GDG1_1HL8kIovMXZ_wWfLAyWbERjF_4z_4zQnuYhYNZiW_KLTo3kuDZcbyGZTpJvA3HqWc-m5nwwbg0YqoKwfwUOwJVErRzaf7OFsmyYbtFuTnT8I3nOGaVKxN5SnR0Sk2blSBjeOt-Ca9R6LDekZZb43v9iEEUVwXyOWkdi0iaeGXPeBvNR1E-lHvjBiySfBg"
  },
  "data": {
    "name": "Test Shelter 1748819972735",
    "type": "shelter",
    "description": "Test shelter for E2E testing",
    "address": "123 Shelter Street",
    "phone": "+1234567890",
    "email": "test-shelter-1748819972735@example.com"
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "396",
    "etag": "W/\"18c-8TmqG7XiWOZTgu1BSwGkY+1RXtY\"",
    "date": "Sun, 01 Jun 2025 23:19:33 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "486015a6-2a20-4343-b685-70ce08ef2eb4",
    "name": "Test Shelter 1748819972735",
    "type": "shelter",
    "description": "Test shelter for E2E testing",
    "logo": null,
    "address": "123 Shelter Street",
    "phone": "+1234567890",
    "email": "test-shelter-1748819972735@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-01T23:19:33.183Z",
    "updatedAt": "2025-06-01T23:19:33.183Z"
  }
}
```

**⏱️ Duration:** 925.5 ms  

</details>


---

### Test: Should create organization with default type when not specified
**Status:** ✅ PASSED  
**Duration:** 0.54s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (536.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODE5OTY3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MTk5NjcsImV4cCI6MTc0ODgyMzU2NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HpXGxy-v0ugFZvCa15BfgfDhdK_ugtlx5CSkIGGCmRGreCSYV7iRSoXjQIU-yL_i1zTqq8Vz56jg-OB3L4wWw1NKk0Pfw0ao2eZ4i4M7nYiRV_cFFrFgJ2y364N6wU1pgLDZec9TPicL39GUMqr8GDG1_1HL8kIovMXZ_wWfLAyWbERjF_4z_4zQnuYhYNZiW_KLTo3kuDZcbyGZTpJvA3HqWc-m5nwwbg0YqoKwfwUOwJVErRzaf7OFsmyYbtFuTnT8I3nOGaVKxN5SnR0Sk2blSBjeOt-Ca9R6LDekZZb43v9iEEUVwXyOWkdi0iaeGXPeBvNR1E-lHvjBiySfBg"
  },
  "data": {
    "name": "Default Type Org 1748819973664",
    "description": "Organization without explicit type",
    "email": "default-type-1748819973664@example.com",
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "406",
    "etag": "W/\"196-smn7tULT+kqsumtR++h7rcMC3lc\"",
    "date": "Sun, 01 Jun 2025 23:19:34 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "59afaa55-9b76-4f81-9d3a-f4878b9d4b78",
    "name": "Default Type Org 1748819973664",
    "type": "shelter",
    "description": "Organization without explicit type",
    "logo": null,
    "address": "123 Default Street",
    "phone": "+1234567890",
    "email": "default-type-1748819973664@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-01T23:19:34.144Z",
    "updatedAt": "2025-06-01T23:19:34.144Z"
  }
}
```

**⏱️ Duration:** 536.9 ms  

</details>


---

### Test: Should fail with invalid organization type
**Status:** ✅ PASSED  
**Duration:** 0.46s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (456.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODE5OTY3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MTk5NjcsImV4cCI6MTc0ODgyMzU2NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HpXGxy-v0ugFZvCa15BfgfDhdK_ugtlx5CSkIGGCmRGreCSYV7iRSoXjQIU-yL_i1zTqq8Vz56jg-OB3L4wWw1NKk0Pfw0ao2eZ4i4M7nYiRV_cFFrFgJ2y364N6wU1pgLDZec9TPicL39GUMqr8GDG1_1HL8kIovMXZ_wWfLAyWbERjF_4z_4zQnuYhYNZiW_KLTo3kuDZcbyGZTpJvA3HqWc-m5nwwbg0YqoKwfwUOwJVErRzaf7OFsmyYbtFuTnT8I3nOGaVKxN5SnR0Sk2blSBjeOt-Ca9R6LDekZZb43v9iEEUVwXyOWkdi0iaeGXPeBvNR1E-lHvjBiySfBg"
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "122",
    "etag": "W/\"7a-cv5Moexh9jmlV9a8h361//b+/xg\"",
    "date": "Sun, 01 Jun 2025 23:19:34 GMT",
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

**⏱️ Duration:** 456.3 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should validate required fields for shelter type
**Status:** ✅ PASSED  
**Duration:** 0.36s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (357.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODE5OTY3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MTk5NjcsImV4cCI6MTc0ODgyMzU2NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HpXGxy-v0ugFZvCa15BfgfDhdK_ugtlx5CSkIGGCmRGreCSYV7iRSoXjQIU-yL_i1zTqq8Vz56jg-OB3L4wWw1NKk0Pfw0ao2eZ4i4M7nYiRV_cFFrFgJ2y364N6wU1pgLDZec9TPicL39GUMqr8GDG1_1HL8kIovMXZ_wWfLAyWbERjF_4z_4zQnuYhYNZiW_KLTo3kuDZcbyGZTpJvA3HqWc-m5nwwbg0YqoKwfwUOwJVErRzaf7OFsmyYbtFuTnT8I3nOGaVKxN5SnR0Sk2blSBjeOt-Ca9R6LDekZZb43v9iEEUVwXyOWkdi0iaeGXPeBvNR1E-lHvjBiySfBg"
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "139",
    "etag": "W/\"8b-ovr5h+9XT0nc5NsGRedTYTWaYgo\"",
    "date": "Sun, 01 Jun 2025 23:19:35 GMT",
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

**⏱️ Duration:** 357.5 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should handle empty string type
**Status:** ✅ PASSED  
**Duration:** 0.41s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (409.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODE5OTY3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MTk5NjcsImV4cCI6MTc0ODgyMzU2NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HpXGxy-v0ugFZvCa15BfgfDhdK_ugtlx5CSkIGGCmRGreCSYV7iRSoXjQIU-yL_i1zTqq8Vz56jg-OB3L4wWw1NKk0Pfw0ao2eZ4i4M7nYiRV_cFFrFgJ2y364N6wU1pgLDZec9TPicL39GUMqr8GDG1_1HL8kIovMXZ_wWfLAyWbERjF_4z_4zQnuYhYNZiW_KLTo3kuDZcbyGZTpJvA3HqWc-m5nwwbg0YqoKwfwUOwJVErRzaf7OFsmyYbtFuTnT8I3nOGaVKxN5SnR0Sk2blSBjeOt-Ca9R6LDekZZb43v9iEEUVwXyOWkdi0iaeGXPeBvNR1E-lHvjBiySfBg"
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "122",
    "etag": "W/\"7a-cv5Moexh9jmlV9a8h361//b+/xg\"",
    "date": "Sun, 01 Jun 2025 23:19:35 GMT",
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

**⏱️ Duration:** 409.6 ms  
**❌ Error:** Request failed with status code 400  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/organizations (425.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODE5OTY3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MTk5NjcsImV4cCI6MTc0ODgyMzU2NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HpXGxy-v0ugFZvCa15BfgfDhdK_ugtlx5CSkIGGCmRGreCSYV7iRSoXjQIU-yL_i1zTqq8Vz56jg-OB3L4wWw1NKk0Pfw0ao2eZ4i4M7nYiRV_cFFrFgJ2y364N6wU1pgLDZec9TPicL39GUMqr8GDG1_1HL8kIovMXZ_wWfLAyWbERjF_4z_4zQnuYhYNZiW_KLTo3kuDZcbyGZTpJvA3HqWc-m5nwwbg0YqoKwfwUOwJVErRzaf7OFsmyYbtFuTnT8I3nOGaVKxN5SnR0Sk2blSBjeOt-Ca9R6LDekZZb43v9iEEUVwXyOWkdi0iaeGXPeBvNR1E-lHvjBiySfBg"
  },
  "data": {
    "name": "Update Type Test Org 1748819975435",
    "type": "shelter",
    "description": "Organization for type update tests",
    "address": "456 Update Street",
    "phone": "+9876543210",
    "email": "update-type-test-1748819975435@example.com"
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "413",
    "etag": "W/\"19d-UmliVIIOI243eG8wQWv4BpxMKrc\"",
    "date": "Sun, 01 Jun 2025 23:19:35 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "5a3842ff-0aa3-4a14-a0e6-ec3c6a2780ee",
    "name": "Update Type Test Org 1748819975435",
    "type": "shelter",
    "description": "Organization for type update tests",
    "logo": null,
    "address": "456 Update Street",
    "phone": "+9876543210",
    "email": "update-type-test-1748819975435@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-01T23:19:35.802Z",
    "updatedAt": "2025-06-01T23:19:35.802Z"
  }
}
```

**⏱️ Duration:** 425.8 ms  

</details>


---

### Test: Should update organization type successfully
**Status:** ✅ PASSED  
**Duration:** 0.98s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/organizations/5a3842ff-0aa3-4a14-a0e6-ec3c6a2780ee (978.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODE5OTY3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MTk5NjcsImV4cCI6MTc0ODgyMzU2NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HpXGxy-v0ugFZvCa15BfgfDhdK_ugtlx5CSkIGGCmRGreCSYV7iRSoXjQIU-yL_i1zTqq8Vz56jg-OB3L4wWw1NKk0Pfw0ao2eZ4i4M7nYiRV_cFFrFgJ2y364N6wU1pgLDZec9TPicL39GUMqr8GDG1_1HL8kIovMXZ_wWfLAyWbERjF_4z_4zQnuYhYNZiW_KLTo3kuDZcbyGZTpJvA3HqWc-m5nwwbg0YqoKwfwUOwJVErRzaf7OFsmyYbtFuTnT8I3nOGaVKxN5SnR0Sk2blSBjeOt-Ca9R6LDekZZb43v9iEEUVwXyOWkdi0iaeGXPeBvNR1E-lHvjBiySfBg"
  },
  "data": {
    "description": "Updated description for shelter"
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "410",
    "etag": "W/\"19a-DCiCxsUmnPHulx3VG/xcoLhtB6A\"",
    "date": "Sun, 01 Jun 2025 23:19:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "5a3842ff-0aa3-4a14-a0e6-ec3c6a2780ee",
    "name": "Update Type Test Org 1748819975435",
    "type": "shelter",
    "description": "Updated description for shelter",
    "logo": null,
    "address": "456 Update Street",
    "phone": "+9876543210",
    "email": "update-type-test-1748819975435@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-01T23:19:35.802Z",
    "updatedAt": "2025-06-01T23:19:36.726Z"
  }
}
```

**⏱️ Duration:** 978.9 ms  

</details>


---

### Test: Should fail when updating to invalid type
**Status:** ✅ PASSED  
**Duration:** 0.48s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/organizations/5a3842ff-0aa3-4a14-a0e6-ec3c6a2780ee (476.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODE5OTY3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MTk5NjcsImV4cCI6MTc0ODgyMzU2NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HpXGxy-v0ugFZvCa15BfgfDhdK_ugtlx5CSkIGGCmRGreCSYV7iRSoXjQIU-yL_i1zTqq8Vz56jg-OB3L4wWw1NKk0Pfw0ao2eZ4i4M7nYiRV_cFFrFgJ2y364N6wU1pgLDZec9TPicL39GUMqr8GDG1_1HL8kIovMXZ_wWfLAyWbERjF_4z_4zQnuYhYNZiW_KLTo3kuDZcbyGZTpJvA3HqWc-m5nwwbg0YqoKwfwUOwJVErRzaf7OFsmyYbtFuTnT8I3nOGaVKxN5SnR0Sk2blSBjeOt-Ca9R6LDekZZb43v9iEEUVwXyOWkdi0iaeGXPeBvNR1E-lHvjBiySfBg"
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "122",
    "etag": "W/\"7a-cv5Moexh9jmlV9a8h361//b+/xg\"",
    "date": "Sun, 01 Jun 2025 23:19:37 GMT",
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

**⏱️ Duration:** 476.4 ms  
**❌ Error:** Request failed with status code 400  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/organizations (561.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODE5OTY3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MTk5NjcsImV4cCI6MTc0ODgyMzU2NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HpXGxy-v0ugFZvCa15BfgfDhdK_ugtlx5CSkIGGCmRGreCSYV7iRSoXjQIU-yL_i1zTqq8Vz56jg-OB3L4wWw1NKk0Pfw0ao2eZ4i4M7nYiRV_cFFrFgJ2y364N6wU1pgLDZec9TPicL39GUMqr8GDG1_1HL8kIovMXZ_wWfLAyWbERjF_4z_4zQnuYhYNZiW_KLTo3kuDZcbyGZTpJvA3HqWc-m5nwwbg0YqoKwfwUOwJVErRzaf7OFsmyYbtFuTnT8I3nOGaVKxN5SnR0Sk2blSBjeOt-Ca9R6LDekZZb43v9iEEUVwXyOWkdi0iaeGXPeBvNR1E-lHvjBiySfBg"
  },
  "data": {
    "name": "Filter Test Shelter 1 1748819977322",
    "type": "shelter",
    "description": "Test shelter 1 for filtering",
    "address": "100 Filter Street",
    "phone": "+1234567890",
    "email": "filter-shelter-0-1748819977322@example.com"
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "408",
    "etag": "W/\"198-y7yCz3rCStcOAAoO9tzBlxB9Gk0\"",
    "date": "Sun, 01 Jun 2025 23:19:37 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "cd3472ea-d243-482b-ba8f-c56f8d1d4826",
    "name": "Filter Test Shelter 1 1748819977322",
    "type": "shelter",
    "description": "Test shelter 1 for filtering",
    "logo": null,
    "address": "100 Filter Street",
    "phone": "+1234567890",
    "email": "filter-shelter-0-1748819977322@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-01T23:19:37.826Z",
    "updatedAt": "2025-06-01T23:19:37.826Z"
  }
}
```

**⏱️ Duration:** 561.6 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/organizations (465.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODE5OTY3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MTk5NjcsImV4cCI6MTc0ODgyMzU2NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HpXGxy-v0ugFZvCa15BfgfDhdK_ugtlx5CSkIGGCmRGreCSYV7iRSoXjQIU-yL_i1zTqq8Vz56jg-OB3L4wWw1NKk0Pfw0ao2eZ4i4M7nYiRV_cFFrFgJ2y364N6wU1pgLDZec9TPicL39GUMqr8GDG1_1HL8kIovMXZ_wWfLAyWbERjF_4z_4zQnuYhYNZiW_KLTo3kuDZcbyGZTpJvA3HqWc-m5nwwbg0YqoKwfwUOwJVErRzaf7OFsmyYbtFuTnT8I3nOGaVKxN5SnR0Sk2blSBjeOt-Ca9R6LDekZZb43v9iEEUVwXyOWkdi0iaeGXPeBvNR1E-lHvjBiySfBg"
  },
  "data": {
    "name": "Filter Test Shelter 2 1748819977884",
    "type": "shelter",
    "description": "Test shelter 2 for filtering",
    "address": "101 Filter Street",
    "phone": "+1234567891",
    "email": "filter-shelter-1-1748819977884@example.com"
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "408",
    "etag": "W/\"198-ounjfO3bGZ5H/RtloWrCxIwWu/Q\"",
    "date": "Sun, 01 Jun 2025 23:19:38 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "ca407b41-2357-4b08-9a5e-32ad28ea9a38",
    "name": "Filter Test Shelter 2 1748819977884",
    "type": "shelter",
    "description": "Test shelter 2 for filtering",
    "logo": null,
    "address": "101 Filter Street",
    "phone": "+1234567891",
    "email": "filter-shelter-1-1748819977884@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-01T23:19:38.291Z",
    "updatedAt": "2025-06-01T23:19:38.291Z"
  }
}
```

**⏱️ Duration:** 465.4 ms  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/organizations (455.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODE5OTY3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MTk5NjcsImV4cCI6MTc0ODgyMzU2NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HpXGxy-v0ugFZvCa15BfgfDhdK_ugtlx5CSkIGGCmRGreCSYV7iRSoXjQIU-yL_i1zTqq8Vz56jg-OB3L4wWw1NKk0Pfw0ao2eZ4i4M7nYiRV_cFFrFgJ2y364N6wU1pgLDZec9TPicL39GUMqr8GDG1_1HL8kIovMXZ_wWfLAyWbERjF_4z_4zQnuYhYNZiW_KLTo3kuDZcbyGZTpJvA3HqWc-m5nwwbg0YqoKwfwUOwJVErRzaf7OFsmyYbtFuTnT8I3nOGaVKxN5SnR0Sk2blSBjeOt-Ca9R6LDekZZb43v9iEEUVwXyOWkdi0iaeGXPeBvNR1E-lHvjBiySfBg"
  },
  "data": {
    "name": "Filter Test Shelter 3 1748819978349",
    "type": "shelter",
    "description": "Test shelter 3 for filtering",
    "address": "102 Filter Street",
    "phone": "+1234567892",
    "email": "filter-shelter-2-1748819978349@example.com"
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "408",
    "etag": "W/\"198-HAhsCWLIRapGRSCWRy3/DxpL3gE\"",
    "date": "Sun, 01 Jun 2025 23:19:38 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "38e758e7-9976-49ab-898d-4b5fa3d29ee6",
    "name": "Filter Test Shelter 3 1748819978349",
    "type": "shelter",
    "description": "Test shelter 3 for filtering",
    "logo": null,
    "address": "102 Filter Street",
    "phone": "+1234567892",
    "email": "filter-shelter-2-1748819978349@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-01T23:19:38.749Z",
    "updatedAt": "2025-06-01T23:19:38.749Z"
  }
}
```

**⏱️ Duration:** 455.8 ms  

</details>


---

### Test: Should filter organizations by shelter type
**Status:** ✅ PASSED  
**Duration:** 0.81s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations?type=shelter (805.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODE5OTY3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MTk5NjcsImV4cCI6MTc0ODgyMzU2NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HpXGxy-v0ugFZvCa15BfgfDhdK_ugtlx5CSkIGGCmRGreCSYV7iRSoXjQIU-yL_i1zTqq8Vz56jg-OB3L4wWw1NKk0Pfw0ao2eZ4i4M7nYiRV_cFFrFgJ2y364N6wU1pgLDZec9TPicL39GUMqr8GDG1_1HL8kIovMXZ_wWfLAyWbERjF_4z_4zQnuYhYNZiW_KLTo3kuDZcbyGZTpJvA3HqWc-m5nwwbg0YqoKwfwUOwJVErRzaf7OFsmyYbtFuTnT8I3nOGaVKxN5SnR0Sk2blSBjeOt-Ca9R6LDekZZb43v9iEEUVwXyOWkdi0iaeGXPeBvNR1E-lHvjBiySfBg"
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "46902",
    "etag": "W/\"b736-aK0uJ7wCm1PdH5lHoglwV7Fgr5A\"",
    "date": "Sun, 01 Jun 2025 23:19:39 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "5a3842ff-0aa3-4a14-a0e6-ec3c6a2780ee",
      "name": "Update Type Test Org 1748819975435",
      "type": "shelter",
      "description": "Updated description for shelter",
      "logo": null,
      "address": "456 Update Street",
      "phone": "+9876543210",
      "email": "update-type-test-1748819975435@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-01T23:19:35.802Z",
      "updatedAt": "2025-06-01T23:19:36.726Z",
      "memberships": []
    },
    {
      "id": "486015a6-2a20-4343-b685-70ce08ef2eb4",
      "name": "Test Shelter 1748819972735",
      "type": "shelter",
      "description": "Test shelter for E2E testing",
      "logo": null,
      "address": "123 Shelter Street",
      "phone": "+1234567890",
      "email": "test-shelter-1748819972735@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-01T23:19:33.183Z",
      "updatedAt": "2025-06-01T23:19:33.183Z",
      "memberships": []
    },
    {
      "id": "59afaa55-9b76-4f81-9d3a-f4878b9d4b78",
      "name": "Default Type Org 1748819973664",
      "type": "shelter",
      "description": "Organization without explicit type",
      "logo": null,
      "address": "123 Default Street",
      "phone": "+1234567890",
      "email": "default-type-1748819973664@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-01T23:19:34.144Z",
      "updatedAt": "2025-06-01T23:19:34.144Z",
      "memberships": []
    },
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
            "createdAt": "2025-05-27T21:11:44.129Z",
            "updatedAt": "2025-05-27T21:11:44.129Z",
            "isSuperAdmin": false
          }
        }
      ]
    },
    {
      "id": "cd3472ea-d243-482b-ba8f-c56f8d1d4826",
      "name": "Filter Test Shelter 1 1748819977322",
      "type": "shelter",
      "description": "Test shelter 1 for filtering",
      "logo": null,
      "address": "100 Filter Street",
      "phone": "+1234567890",
      "email": "filter-shelter-0-1748819977322@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-01T23:19:37.826Z",
      "updatedAt": "2025-06-01T23:19:37.826Z",
      "memberships": []
    },
    {
      "id": "ca407b41-2357-4b08-9a5e-32ad28ea9a38",
      "name": "Filter Test Shelter 2 1748819977884",
      "type": "shelter",
      "description": "Test shelter 2 for filtering",
      "logo": null,
      "address": "101 Filter Street",
      "phone": "+1234567891",
      "email": "filter-shelter-1-1748819977884@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-01T23:19:38.291Z",
      "updatedAt": "2025-06-01T23:19:38.291Z",
      "memberships": []
    },
    {
      "id": "38e758e7-9976-49ab-898d-4b5fa3d29ee6",
      "name": "Filter Test Shelter 3 1748819978349",
      "type": "shelter",
      "description": "Test shelter 3 for filtering",
      "logo": null,
      "address": "102 Filter Street",
      "phone": "+1234567892",
      "email": "filter-shelter-2-1748819978349@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-01T23:19:38.749Z",
      "updatedAt": "2025-06-01T23:19:38.749Z",
      "memberships": []
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
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T23:00:04.274Z",
      "updatedAt": "2025-05-27T23:00:04.274Z",
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
      "createdBy": "CSHCi7NrOAUvUSSmxeDcdPRc49M2",
      "createdAt": "2025-05-27T20:16:22.244Z",
      "updatedAt": "2025-05-27T20:16:22.244Z",
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
            "createdAt": "2025-05-27T21:08:50.085Z",
            "updatedAt": "2025-05-27T21:08:50.085Z",
            "isSuperAdmin": false
          }
        }
      ]
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
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-01T23:18:19.315Z",
      "updatedAt": "2025-06-01T23:18:19.315Z",
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
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T22:54:22.687Z",
      "updatedAt": "2025-05-27T22:54:22.687Z",
      "memberships": []
    }
  ]
}
```

**⏱️ Duration:** 805.0 ms  

</details>


---

### Test: Should fail with invalid type filter
**Status:** ✅ PASSED  
**Duration:** 0.46s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations?type=invalid_type (461.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODE5OTY3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MTk5NjcsImV4cCI6MTc0ODgyMzU2NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HpXGxy-v0ugFZvCa15BfgfDhdK_ugtlx5CSkIGGCmRGreCSYV7iRSoXjQIU-yL_i1zTqq8Vz56jg-OB3L4wWw1NKk0Pfw0ao2eZ4i4M7nYiRV_cFFrFgJ2y364N6wU1pgLDZec9TPicL39GUMqr8GDG1_1HL8kIovMXZ_wWfLAyWbERjF_4z_4zQnuYhYNZiW_KLTo3kuDZcbyGZTpJvA3HqWc-m5nwwbg0YqoKwfwUOwJVErRzaf7OFsmyYbtFuTnT8I3nOGaVKxN5SnR0Sk2blSBjeOt-Ca9R6LDekZZb43v9iEEUVwXyOWkdi0iaeGXPeBvNR1E-lHvjBiySfBg"
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "136",
    "etag": "W/\"88-KrwnPAzC9qqgXWMbZPC/2NwxQgE\"",
    "date": "Sun, 01 Jun 2025 23:19:40 GMT",
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

**⏱️ Duration:** 461.7 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should return all organizations when no type filter is applied
**Status:** ✅ PASSED  
**Duration:** 0.74s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations (743.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODE5OTY3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MTk5NjcsImV4cCI6MTc0ODgyMzU2NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HpXGxy-v0ugFZvCa15BfgfDhdK_ugtlx5CSkIGGCmRGreCSYV7iRSoXjQIU-yL_i1zTqq8Vz56jg-OB3L4wWw1NKk0Pfw0ao2eZ4i4M7nYiRV_cFFrFgJ2y364N6wU1pgLDZec9TPicL39GUMqr8GDG1_1HL8kIovMXZ_wWfLAyWbERjF_4z_4zQnuYhYNZiW_KLTo3kuDZcbyGZTpJvA3HqWc-m5nwwbg0YqoKwfwUOwJVErRzaf7OFsmyYbtFuTnT8I3nOGaVKxN5SnR0Sk2blSBjeOt-Ca9R6LDekZZb43v9iEEUVwXyOWkdi0iaeGXPeBvNR1E-lHvjBiySfBg"
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "46902",
    "etag": "W/\"b736-aK0uJ7wCm1PdH5lHoglwV7Fgr5A\"",
    "date": "Sun, 01 Jun 2025 23:19:40 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "5a3842ff-0aa3-4a14-a0e6-ec3c6a2780ee",
      "name": "Update Type Test Org 1748819975435",
      "type": "shelter",
      "description": "Updated description for shelter",
      "logo": null,
      "address": "456 Update Street",
      "phone": "+9876543210",
      "email": "update-type-test-1748819975435@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-01T23:19:35.802Z",
      "updatedAt": "2025-06-01T23:19:36.726Z",
      "memberships": []
    },
    {
      "id": "486015a6-2a20-4343-b685-70ce08ef2eb4",
      "name": "Test Shelter 1748819972735",
      "type": "shelter",
      "description": "Test shelter for E2E testing",
      "logo": null,
      "address": "123 Shelter Street",
      "phone": "+1234567890",
      "email": "test-shelter-1748819972735@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-01T23:19:33.183Z",
      "updatedAt": "2025-06-01T23:19:33.183Z",
      "memberships": []
    },
    {
      "id": "59afaa55-9b76-4f81-9d3a-f4878b9d4b78",
      "name": "Default Type Org 1748819973664",
      "type": "shelter",
      "description": "Organization without explicit type",
      "logo": null,
      "address": "123 Default Street",
      "phone": "+1234567890",
      "email": "default-type-1748819973664@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-01T23:19:34.144Z",
      "updatedAt": "2025-06-01T23:19:34.144Z",
      "memberships": []
    },
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
            "createdAt": "2025-05-27T21:11:44.129Z",
            "updatedAt": "2025-05-27T21:11:44.129Z",
            "isSuperAdmin": false
          }
        }
      ]
    },
    {
      "id": "cd3472ea-d243-482b-ba8f-c56f8d1d4826",
      "name": "Filter Test Shelter 1 1748819977322",
      "type": "shelter",
      "description": "Test shelter 1 for filtering",
      "logo": null,
      "address": "100 Filter Street",
      "phone": "+1234567890",
      "email": "filter-shelter-0-1748819977322@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-01T23:19:37.826Z",
      "updatedAt": "2025-06-01T23:19:37.826Z",
      "memberships": []
    },
    {
      "id": "ca407b41-2357-4b08-9a5e-32ad28ea9a38",
      "name": "Filter Test Shelter 2 1748819977884",
      "type": "shelter",
      "description": "Test shelter 2 for filtering",
      "logo": null,
      "address": "101 Filter Street",
      "phone": "+1234567891",
      "email": "filter-shelter-1-1748819977884@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-01T23:19:38.291Z",
      "updatedAt": "2025-06-01T23:19:38.291Z",
      "memberships": []
    },
    {
      "id": "38e758e7-9976-49ab-898d-4b5fa3d29ee6",
      "name": "Filter Test Shelter 3 1748819978349",
      "type": "shelter",
      "description": "Test shelter 3 for filtering",
      "logo": null,
      "address": "102 Filter Street",
      "phone": "+1234567892",
      "email": "filter-shelter-2-1748819978349@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-01T23:19:38.749Z",
      "updatedAt": "2025-06-01T23:19:38.749Z",
      "memberships": []
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
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T23:00:04.274Z",
      "updatedAt": "2025-05-27T23:00:04.274Z",
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
      "createdBy": "CSHCi7NrOAUvUSSmxeDcdPRc49M2",
      "createdAt": "2025-05-27T20:16:22.244Z",
      "updatedAt": "2025-05-27T20:16:22.244Z",
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
            "createdAt": "2025-05-27T21:08:50.085Z",
            "updatedAt": "2025-05-27T21:08:50.085Z",
            "isSuperAdmin": false
          }
        }
      ]
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
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-01T23:18:19.315Z",
      "updatedAt": "2025-06-01T23:18:19.315Z",
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
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T22:54:22.687Z",
      "updatedAt": "2025-05-27T22:54:22.687Z",
      "memberships": []
    }
  ]
}
```

**⏱️ Duration:** 743.9 ms  

</details>


---

### Test: Should handle null type
**Status:** ✅ PASSED  
**Duration:** 0.43s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (428.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODE5OTY3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MTk5NjcsImV4cCI6MTc0ODgyMzU2NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HpXGxy-v0ugFZvCa15BfgfDhdK_ugtlx5CSkIGGCmRGreCSYV7iRSoXjQIU-yL_i1zTqq8Vz56jg-OB3L4wWw1NKk0Pfw0ao2eZ4i4M7nYiRV_cFFrFgJ2y364N6wU1pgLDZec9TPicL39GUMqr8GDG1_1HL8kIovMXZ_wWfLAyWbERjF_4z_4zQnuYhYNZiW_KLTo3kuDZcbyGZTpJvA3HqWc-m5nwwbg0YqoKwfwUOwJVErRzaf7OFsmyYbtFuTnT8I3nOGaVKxN5SnR0Sk2blSBjeOt-Ca9R6LDekZZb43v9iEEUVwXyOWkdi0iaeGXPeBvNR1E-lHvjBiySfBg"
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "92",
    "etag": "W/\"5c-EuxjmvJCHFCWR1NJeOW16i94MbI\"",
    "date": "Sun, 01 Jun 2025 23:19:41 GMT",
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

**⏱️ Duration:** 428.3 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should handle case sensitivity
**Status:** ✅ PASSED  
**Duration:** 0.42s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (420.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODE5OTY3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MTk5NjcsImV4cCI6MTc0ODgyMzU2NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HpXGxy-v0ugFZvCa15BfgfDhdK_ugtlx5CSkIGGCmRGreCSYV7iRSoXjQIU-yL_i1zTqq8Vz56jg-OB3L4wWw1NKk0Pfw0ao2eZ4i4M7nYiRV_cFFrFgJ2y364N6wU1pgLDZec9TPicL39GUMqr8GDG1_1HL8kIovMXZ_wWfLAyWbERjF_4z_4zQnuYhYNZiW_KLTo3kuDZcbyGZTpJvA3HqWc-m5nwwbg0YqoKwfwUOwJVErRzaf7OFsmyYbtFuTnT8I3nOGaVKxN5SnR0Sk2blSBjeOt-Ca9R6LDekZZb43v9iEEUVwXyOWkdi0iaeGXPeBvNR1E-lHvjBiySfBg"
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "122",
    "etag": "W/\"7a-cv5Moexh9jmlV9a8h361//b+/xg\"",
    "date": "Sun, 01 Jun 2025 23:19:41 GMT",
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

**⏱️ Duration:** 420.6 ms  
**❌ Error:** Request failed with status code 400  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/organizations/486015a6-2a20-4343-b685-70ce08ef2eb4 (1048.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODE5OTY3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MTk5NjcsImV4cCI6MTc0ODgyMzU2NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HpXGxy-v0ugFZvCa15BfgfDhdK_ugtlx5CSkIGGCmRGreCSYV7iRSoXjQIU-yL_i1zTqq8Vz56jg-OB3L4wWw1NKk0Pfw0ao2eZ4i4M7nYiRV_cFFrFgJ2y364N6wU1pgLDZec9TPicL39GUMqr8GDG1_1HL8kIovMXZ_wWfLAyWbERjF_4z_4zQnuYhYNZiW_KLTo3kuDZcbyGZTpJvA3HqWc-m5nwwbg0YqoKwfwUOwJVErRzaf7OFsmyYbtFuTnT8I3nOGaVKxN5SnR0Sk2blSBjeOt-Ca9R6LDekZZb43v9iEEUVwXyOWkdi0iaeGXPeBvNR1E-lHvjBiySfBg"
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "47",
    "etag": "W/\"2f-C4xREmSZpo7Mho+ixbrcQPJF0Zw\"",
    "date": "Sun, 01 Jun 2025 23:19:42 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1048.8 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/organizations/59afaa55-9b76-4f81-9d3a-f4878b9d4b78 (943.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODE5OTY3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MTk5NjcsImV4cCI6MTc0ODgyMzU2NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HpXGxy-v0ugFZvCa15BfgfDhdK_ugtlx5CSkIGGCmRGreCSYV7iRSoXjQIU-yL_i1zTqq8Vz56jg-OB3L4wWw1NKk0Pfw0ao2eZ4i4M7nYiRV_cFFrFgJ2y364N6wU1pgLDZec9TPicL39GUMqr8GDG1_1HL8kIovMXZ_wWfLAyWbERjF_4z_4zQnuYhYNZiW_KLTo3kuDZcbyGZTpJvA3HqWc-m5nwwbg0YqoKwfwUOwJVErRzaf7OFsmyYbtFuTnT8I3nOGaVKxN5SnR0Sk2blSBjeOt-Ca9R6LDekZZb43v9iEEUVwXyOWkdi0iaeGXPeBvNR1E-lHvjBiySfBg"
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "47",
    "etag": "W/\"2f-C4xREmSZpo7Mho+ixbrcQPJF0Zw\"",
    "date": "Sun, 01 Jun 2025 23:19:43 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 943.4 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/organizations/5a3842ff-0aa3-4a14-a0e6-ec3c6a2780ee (975.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODE5OTY3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MTk5NjcsImV4cCI6MTc0ODgyMzU2NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HpXGxy-v0ugFZvCa15BfgfDhdK_ugtlx5CSkIGGCmRGreCSYV7iRSoXjQIU-yL_i1zTqq8Vz56jg-OB3L4wWw1NKk0Pfw0ao2eZ4i4M7nYiRV_cFFrFgJ2y364N6wU1pgLDZec9TPicL39GUMqr8GDG1_1HL8kIovMXZ_wWfLAyWbERjF_4z_4zQnuYhYNZiW_KLTo3kuDZcbyGZTpJvA3HqWc-m5nwwbg0YqoKwfwUOwJVErRzaf7OFsmyYbtFuTnT8I3nOGaVKxN5SnR0Sk2blSBjeOt-Ca9R6LDekZZb43v9iEEUVwXyOWkdi0iaeGXPeBvNR1E-lHvjBiySfBg"
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "47",
    "etag": "W/\"2f-C4xREmSZpo7Mho+ixbrcQPJF0Zw\"",
    "date": "Sun, 01 Jun 2025 23:19:44 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 975.3 ms  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/organizations/cd3472ea-d243-482b-ba8f-c56f8d1d4826 (882.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODE5OTY3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MTk5NjcsImV4cCI6MTc0ODgyMzU2NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HpXGxy-v0ugFZvCa15BfgfDhdK_ugtlx5CSkIGGCmRGreCSYV7iRSoXjQIU-yL_i1zTqq8Vz56jg-OB3L4wWw1NKk0Pfw0ao2eZ4i4M7nYiRV_cFFrFgJ2y364N6wU1pgLDZec9TPicL39GUMqr8GDG1_1HL8kIovMXZ_wWfLAyWbERjF_4z_4zQnuYhYNZiW_KLTo3kuDZcbyGZTpJvA3HqWc-m5nwwbg0YqoKwfwUOwJVErRzaf7OFsmyYbtFuTnT8I3nOGaVKxN5SnR0Sk2blSBjeOt-Ca9R6LDekZZb43v9iEEUVwXyOWkdi0iaeGXPeBvNR1E-lHvjBiySfBg"
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "47",
    "etag": "W/\"2f-C4xREmSZpo7Mho+ixbrcQPJF0Zw\"",
    "date": "Sun, 01 Jun 2025 23:19:45 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 882.6 ms  

</details>

<details><summary>📡 Request #6: DELETE http://localhost:3000/api/organizations/ca407b41-2357-4b08-9a5e-32ad28ea9a38 (934.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODE5OTY3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MTk5NjcsImV4cCI6MTc0ODgyMzU2NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HpXGxy-v0ugFZvCa15BfgfDhdK_ugtlx5CSkIGGCmRGreCSYV7iRSoXjQIU-yL_i1zTqq8Vz56jg-OB3L4wWw1NKk0Pfw0ao2eZ4i4M7nYiRV_cFFrFgJ2y364N6wU1pgLDZec9TPicL39GUMqr8GDG1_1HL8kIovMXZ_wWfLAyWbERjF_4z_4zQnuYhYNZiW_KLTo3kuDZcbyGZTpJvA3HqWc-m5nwwbg0YqoKwfwUOwJVErRzaf7OFsmyYbtFuTnT8I3nOGaVKxN5SnR0Sk2blSBjeOt-Ca9R6LDekZZb43v9iEEUVwXyOWkdi0iaeGXPeBvNR1E-lHvjBiySfBg"
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "47",
    "etag": "W/\"2f-C4xREmSZpo7Mho+ixbrcQPJF0Zw\"",
    "date": "Sun, 01 Jun 2025 23:19:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 934.4 ms  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/organizations/38e758e7-9976-49ab-898d-4b5fa3d29ee6 (935.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODE5OTY3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MTk5NjcsImV4cCI6MTc0ODgyMzU2NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HpXGxy-v0ugFZvCa15BfgfDhdK_ugtlx5CSkIGGCmRGreCSYV7iRSoXjQIU-yL_i1zTqq8Vz56jg-OB3L4wWw1NKk0Pfw0ao2eZ4i4M7nYiRV_cFFrFgJ2y364N6wU1pgLDZec9TPicL39GUMqr8GDG1_1HL8kIovMXZ_wWfLAyWbERjF_4z_4zQnuYhYNZiW_KLTo3kuDZcbyGZTpJvA3HqWc-m5nwwbg0YqoKwfwUOwJVErRzaf7OFsmyYbtFuTnT8I3nOGaVKxN5SnR0Sk2blSBjeOt-Ca9R6LDekZZb43v9iEEUVwXyOWkdi0iaeGXPeBvNR1E-lHvjBiySfBg"
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "47",
    "etag": "W/\"2f-C4xREmSZpo7Mho+ixbrcQPJF0Zw\"",
    "date": "Sun, 01 Jun 2025 23:19:47 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 935.2 ms  

</details>

<details><summary>📡 Request #8: POST http://localhost:3000/api/auth/login (263.0ms)</summary>

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
    "content-type": "application/json; charset=utf-8",
    "content-length": "1600",
    "etag": "W/\"640-XwiD+2bq2n97FLPcPZyPN4acirY\"",
    "date": "Sun, 01 Jun 2025 23:19:47 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "user": {
      "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "email": "daniellovazzano@gmail.com",
      "role": "admin",
      "isSuperAdmin": true
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODE5OTg3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MTk5ODcsImV4cCI6MTc0ODgyMzU4NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.NMWbEI8U52k0VOkR0ezYVAvhO-qIpUebu3Zigw-heNoL7WRlXqwV0orZ5HX_9K1nq5wdXo8Nv6W4PsjArzMb1ho7NaNN7b_VJ_CRwlEdpU7rAgmgf0ZI3XuCsa-gsubEUb9Ewyfxfjn_v2shjPdhUCCvzjVo0-dpAcZd_DDrmeDwq3rA3xSv6sULwWyExQ947QczHko0sb9q8a8QilBwrgimBpP9qUrD5dvgHflK5Cl4Gc_bSprFDVdz1kH3dmAZiqvIlq1ftSHEl6EXbbxO1hBxNeKQLoLvmuW25GwUJX3K9xjngp_C6X18d3HiERf6AhSLJpsGUZiNv-kPc82AVQ",
      "refreshToken": "AMf-vByriO0CcYYEQUA4f8RHwui-zpEP4-6LBO9WGB44zOneY3wGJaKpR6zsnx9RhCr4xejDBO6VRTj-Sbg_tgUMqN6FQ3deda16gqOEFOyTFegwn-Tsi3MS4lk0S1Qu9Zr2RcuXxny8asjoiAhWBYkQVOatOQtOiT4zP5IvZlRtvxrhHGKpnDXex5Z9gRFd_M-RunK_9xIdwsI0tRc-MDu-9g2FTG10YrHc9bRAJChaDOsgr6XYLUqq3rKZXTUB5W4xufEdGGYl",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 263.0 ms  

</details>

<details><summary>📡 Request #9: DELETE http://localhost:3000/api/admin/users/u5FAGVzMomN5vGPGhfDCOCcs7q12 (1492.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODE5OTg3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MTk5ODcsImV4cCI6MTc0ODgyMzU4NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.NMWbEI8U52k0VOkR0ezYVAvhO-qIpUebu3Zigw-heNoL7WRlXqwV0orZ5HX_9K1nq5wdXo8Nv6W4PsjArzMb1ho7NaNN7b_VJ_CRwlEdpU7rAgmgf0ZI3XuCsa-gsubEUb9Ewyfxfjn_v2shjPdhUCCvzjVo0-dpAcZd_DDrmeDwq3rA3xSv6sULwWyExQ947QczHko0sb9q8a8QilBwrgimBpP9qUrD5dvgHflK5Cl4Gc_bSprFDVdz1kH3dmAZiqvIlq1ftSHEl6EXbbxO1hBxNeKQLoLvmuW25GwUJX3K9xjngp_C6X18d3HiERf6AhSLJpsGUZiNv-kPc82AVQ"
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "59",
    "etag": "W/\"3b-jIRXR3lyfUlhNaDpPRV0JKmbxjw\"",
    "date": "Sun, 01 Jun 2025 23:19:49 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1492.3 ms  

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
- Total organizations created: 6
- Total test users created: 1
- Organization types functionality tested
- All test data cleaned up automatically

---
*Generated automatically by Enhanced E2E Reporter*
