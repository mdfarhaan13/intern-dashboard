const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

const internData = {
    name: "Bruce Wayne",
    referral_code: "wayne2025",
    donations_raised: 5723,
    rewards: [
        {
            name: "Bronze Tier",
            description: "Unlock at $500",
            unlocked: true
        },
        {
            name: "Silver Tier",
            description: "Unlock at $5,000",
            unlocked: true
        },
        {
            name: "Gold Tier",
            description: "Unlock at $10,000",
            unlocked: false
        }
    ],
    leaderboard: [
        { name: "Tony Stark", donations_raised: 12500 },
        { name: "Bruce Wayne", donations_raised: 5723 },
        { name: "Clark Kent", donations_raised: 4890 },
        { name: "Alex Jones", donations_raised: 3210 },
        { name: "Allie Rodriguez", donations_raised: 2150 },
    ]
};


app.get('/api/intern', (req, res) => {
    res.json(internData);
});


app.listen(port, () => {
    console.log(`Node.js backend server listening at http://localhost:${port}`);
});
