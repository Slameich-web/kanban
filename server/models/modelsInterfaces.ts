import * as Sequelize from 'sequelize'

export interface UserModel extends Sequelize.Model<UserModel, UserViewModel> {
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


export interface TaskListModel extends Sequelize.Model<TaskListModel, TaskListAddModel> {
    id: number;
    createdAt: string;
    updatedAt: string;
    userId: number;
}
export interface TaskListViewModel {
    id: number;
}
export interface TaskListAddModel {
    userId: number;
}

export interface TaskListTodosModel extends Sequelize.Model<TaskListTodosModel, TaskListTodosViewModel> {
    id: number;
    todoId: number;
    taskListId: number;
    createdAt: string;
    updatedAt: string;
}
export interface TaskListTodosViewModel {
    id: number;
}
export interface TodoModel extends Sequelize.Model<TodoModel, TodoModelView> {
    id: number;
    title: string;
    description: string;
    rating: string;
    createdAt: string;
    updatedAt: string;
}
export interface TodoModelView {
    id: number;
    title: string;
    description: string;
    rating: string;
}

export interface RatingModel extends Sequelize.Model<RatingModel, RatingModelView>{
    id: number;
    rate: number;
    createdAt: string;
    updatedAt: string;
}
export interface RatingModelView {
    id: number;
    rate: number;
}