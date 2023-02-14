#!/usr/bin/node
import request from 'request';

const url = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
request (url, function (error, response, body) {
 if (error) {
  console.log(error);
 } else {
  console.log(JSON.parse(body).homeTown);
 }
});