---
id: API
title: API
---

- Interact with RBL through HTTP requests 

### Uses
- Bot interaction for webapp
- XP Cards
- Creating payment sessions
- OAuth2 Discord authorization

### Status Codes
Code | Description —–|————- 400 | Key is invalid, or an error occurred with the request 404 | Route could not be found 429 | Too many requests 500 | Internal server error (rare)

***API Error Examples:*** ``` { code: 400, message: 'Bad Request' } ```

---

### Rate Limiting
his is what is posted to a bots ***Vote Webhook URL***, when a bot is voted for.

#### Response
***Schema:***

```json
{
  at: Date; // JSON date when of vote
  by: string; // id of user that votes
}
```
***Example:***

```json
{ at: “2020-08-07T12:56:27.100Z”, by: “218459216145285121” }
```

---

## Bot

## Bot Stats

You can view the stats of a bot, including voting, guilds and more.

***Url:*** ```https://bots.rovelstars.ga/api/v1/bots/:id/stats```

### Response

***Schema:***

```json
{
  general: { // general bot stats
    approvedAt: Date,
    guildCount: number,
    lastVoteAt: Date,
    totalVotes: number,
    voteCount: number
  },
  topVoters: { // users ranked by votes
    userId: string;
    count: number;
  },
  recentVotes: { // votes per day, during last 7 days
    count: number;
    day: number;
  },
  votes: {
    at: Date;
    by: string;
  }
}
```

***Example:***

```https://bots.rovelstars.ga/api/v1/bots/603213294265958400/stats```

---

[Back to top](http://localhost:3000/docs/API)


