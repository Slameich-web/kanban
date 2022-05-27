const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
    id: { type: DataTypes.STRING, primaryKey: true, },
    username: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, unique: true },
    description: { type: DataTypes.STRING },
    phone: { type: DataTypes.STRING },
    status: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const User_Kanban = sequelize.define('user_kanban', {
    id: { type: DataTypes.STRING, primaryKey: true }
});

const Kanban = sequelize.define('kanban', {
    id: { type: DataTypes.STRING, primaryKey: true, },
    title: { type: DataTypes.STRING },
    id_user: { type: DataTypes.STRING, primaryKey: true },
    id_todo: { type: DataTypes.ARRAY(DataTypes.STRING), primaryKey: true },
});

const Todo = sequelize.define('todo', {
    id: { type: DataTypes.STRING, primaryKey: true, },
    title: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    status: { type: DataTypes.STRING },
    id_user: { type: DataTypes.STRING, primaryKey: true },
    id_todo: { type: DataTypes.STRING, primaryKey: true },
});

User.hasMany(Todo);
Todo.belongsTo(User);

User.belongsToMany(Kanban, { through: User_Kanban });
Kanban.belongsToMany(User, { through: User_Kanban });

Kanban.hasMany(Todo);
Todo.belongsTo(Kanban);

module.exports = {
    User,
    Kanban,
    Todo,
    User_Kanban
}; 