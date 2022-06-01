import {DataTypes}  from 'sequelize';
import {sequelize} from '../db';
import * as Sequelize from 'sequelize'

export interface UserAddModel {
    id: number;
    email: string;
    password: string;
    role: string;
    phone: string;
    description: string;
    username: string;
};
export interface UserModel extends Sequelize.Model<UserModel, UserAddModel> {
    id: number;
    email: string;
    password: string;
    role: string;
    phone: string;
    description: string;
    username: string;
    createdAt: string;
    updatedAt: string;
};

export interface UserViewModel {
    id: number;
    email: string;
    password: string;
    role: string;
    phone: string;
    description: string;
    username: string;
}

const User = sequelize.define<UserModel, UserAddModel>('user', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
    phone: {type: DataTypes.STRING, defaultValue: ""},
    description: {type: DataTypes.STRING, defaultValue: ""},
    username: {type: DataTypes.STRING, defaultValue: ""},
})

const TaskList = sequelize.define('task_list', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const TaskListTodos = sequelize.define('task_list_todos', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Todo = sequelize.define('todo', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.STRING},
    rating: {type: DataTypes.STRING}
})

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false},
})


User.hasOne(TaskList)
TaskList.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

TaskList.hasMany(TaskListTodos)
TaskListTodos.belongsTo(TaskList)

Todo.hasMany(Rating)
Rating.belongsTo(Todo)

Todo.hasMany(TaskListTodos)
TaskListTodos.belongsTo(Todo)


export default {
    User,
    TaskList,
    TaskListTodos,
    Todo,
    Rating,
}; 