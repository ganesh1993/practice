/**
 * Created by lenovo on 08/02/2017.
 */
var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('xyz.db');

var csql = "create table if not exists userDetails(ID INT PRIMARY KEY  NOT NULL, cTime text,utime text,createdBy text,updatedBy text,firstName text,lastName text,emailId text NOT NULL,password password)";
db.run(csql);



db.close();
