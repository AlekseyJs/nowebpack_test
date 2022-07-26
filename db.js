const Pool = require('pg').Pool

const pool = new Pool({
    user: 'eejymzrgcxksyf',
    password: '10662b2c1cd7b43d764a63c5321f8975f0a94d12eaded72e639018e9e893184f',
    host:'ec2-54-77-40-202.eu-west-1.compute.amazonaws.com',
    port: 5432,
    database: 'd77m09u34p5fig',
    ssl: {rejectUnauthorized: false}
})

module.exports = pool
