import {DataTypes}  from 'sequelize';
import {sequelize} from '../db';
import * as Sequelize from 'sequelize'
import { UserViewModel, UserModel, TaskListModel, TaskListViewModel, TaskListTodosModel, TaskListTodosViewModel, TodoModel, TodoModelView, RatingModel, RatingModelView } from './modelsInterfaces';

const User = sequelize.define<UserModel, UserViewModel>('user', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
    phone: {type: DataTypes.STRING, defaultValue: ""},
    description: {type: DataTypes.STRING, defaultValue: ""},
    username: {type: DataTypes.STRING, defaultValue: ""},
})

const TaskList = sequelize.define<TaskListModel, TaskListViewModel>('task_list', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const TaskListTodos = sequelize.define<TaskListTodosModel, TaskListTodosViewModel>('task_list_todos', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Todo = sequelize.define<TodoModel, TodoModelView>('todo', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.STRING},
    rating: {type: DataTypes.STRING}
})

const Rating = sequelize.define<RatingModel, RatingModelView>('rating', {
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