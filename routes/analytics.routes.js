import express from "express";
import { readFileSync, writeFileSync} from "fs";

const router = express.router();

const readData=()=>{
const data = readFileSync("/db.json","utf-8")
return JSON.parse(data,null,2)

}

const writeData =(data)=>{
writeFileSync ("/db.json",JSON.stringify(data))
};