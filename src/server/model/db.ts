import sqlite3 from 'sqlite3';
import {DataTypes, Sequelize} from "sequelize";

const dbPath = __dirname+"/"+"db.sqlite";

console.log('dbPath:', dbPath);

export const db = new Sequelize({
    dialect: 'sqlite',
    storage: dbPath,
    logging: false,
    username:'root',
    password:'root',
    dialectModule: sqlite3,
});


export const SettingDB = db.define('Setting', {
    dirs: {
        type: DataTypes.JSONB,
        allowNull: false
    },
    ignorePaths: {
        type: DataTypes.JSONB,
        allowNull: true
    },
    types: {
        type: DataTypes.JSONB
    },
    customType: {
        type: DataTypes.STRING,
        allowNull: true
    },
    customLength: {
        type: DataTypes.NUMBER,
        allowNull: true
    },
});


SettingDB.sync({force: false}).then(res=>{
    console.log('sync SettingDB success');
});

export const findAll = ()=>{
    return SettingDB.findAll();
}

export const insert = (data:any)=>{
    return SettingDB.create(data);
}
