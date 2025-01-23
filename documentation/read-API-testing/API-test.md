# SAMPLE Web App - Observations & 'LIKE' Feature

Instructions for using Postman scripts (sample endpoints and test data)

---

# Sample managing the 'LIKE'

## 1. Adding a 'LIKE' by Staff

**Endpoint (example):**

```javascript
POST https://api.SAMPLE-APP.com/api/web/observations/501/like

Headers:

Authorization: Bearer {{token_staff}}
Content-Type: application/json

Body (JSON):
{
  "staffId": 3001,
  "comment": "Like from web panel"
}

Mock Response (201 Created):
{
  "message": "Staff(3001) LIKED observation 501",
  "observationId": 501,
  "likeCount": 10,
  "state": "LIKED"
}

```

---

## 2. Removing a 'LIKE' by Staff

**Endpoint (example):**

```javascript
DELETE https://api.SAMPLE-APP.com/api/web/observations/501/like

Purpose: Remove a 'LIKE' by staff.
(Depending on the implementation, the body may be omitted.)

Headers:

Authorization: Bearer {{token_staff}}
Content-Type: application/json
Body (JSON) (optional):

{
  "staffId": 3001
}

Mock Response (200 OK):

{
  "message": "Staff(3001) removed LIKE from observation 501",
  "observationId": 501,
  "likeCount": 9,
  "state": "UNLIKED"
}

```

---

## 3. Retrieving a Single Observation (with 'LIKE' Counter)

**Endpoint (example):**

```javascript
GET https://api.SAMPLE-APP.com/api/web/observations/501


Mock Response (200 OK):

{
  "observationId": 501,
  "title": "Morning Activity",
  "likeCount": 0,
  "isLikedByCurrentUser": false
}

If likeCount > 0, you might return something like:

{
  "observationId": 501,
  "title": "Morning Activity",
  "likeCount": 2,
  "isLikedByCurrentUser": true
}

```

---

## 4. Retrieving a List of Users Who 'LIKED' an Observation

**Endpoint (example):**

```javascript
GET https://api.SAMPLE-APP.com/api/web/observations/501/likes

Mock Response (200 OK):

{
  "observationId": 501,
  "likeCount": 3,
  "users": [
    {
      "userId": 3001,
      "displayName": "Alice Staff (Żłobek)",
      "role": "staff"
    },
    {
      "userId": 15001,
      "displayName": "John Parent",
      "role": "parent"
    },
    {
      "userId": 15002,
      "displayName": "Jane Parent",
      "role": "parent"
    }
  ]
}

Note: Staff members may include the notation (Staff or Company personel NAme) in displayName or role: "staff".

```


---

# Sample managing the Observation List

## 5. Retrieving the Observation List (GET)

**Endpoint (example):**

```javascript
GET https://api.SAMPLE-APP.com/api/web/observations

Headers:

Authorization: Bearer {{token_staff}}
Accept: application/json
Body: (none, since it is GET)

Mock Response (200 OK):

{
  "observations": [
    {
      "observationId": 101,
      "title": "Joe's Morning",
      "description": "Breakfast at 8:30, some painting afterward",
      "likeCount": 2,
      "isLikedByCurrentUser": true
    },
    {
      "observationId": 102,
      "title": "Playground time",
      "description": "Kids played outside",
      "likeCount": 1,
      "isLikedByCurrentUser": false
    }
  ]
}

```

---

## 6. Modifying the Observation List (PUT)

**Endpoint (example):**

```javascript
PUT https://api.SAMPLE-APP.com/api/web/observations

Headers:

Authorization: Bearer {{token_staff}}
Content-Type: application/json
Body (JSON):

{
  "observations": [
    {
      "observationId": 101,
      "title": "Joe's Updated Morning",
      "description": "Now includes a drawing session"
    },
    {
      "observationId": 102,
      "title": "Playground time (updated)",
      "description": "Kids played outside with new swing"
    }
  ],
  "updatedBy": 3001
}

(updatedBy is the staff member ID making the changes.)

Mock Response (200 OK):

{
  "message": "Observations list updated",
  "updatedCount": 2,
  "status": "OK"
}

```

---

## 7. Creating an Observation (POST)

**Endpoint (example):**

```javascript
POST https://api.SAMPLE-APP.com/api/web/observations

Headers:

Authorization: Bearer {{token_staff}}
Content-Type: application/json
Body (JSON):

{
  "title": "New Observation - Nap Time",
  "description": "Kids took a nap from 12:00 to 12:30",
  "createdBy": 3001
}

Mock Response (201 Created):

{
  "message": "Observation created",
  "observationId": 120,
  "title": "New Observation - Nap Time",
  "likeCount": 0
}

```

# etc... can continue in future :smiley:
