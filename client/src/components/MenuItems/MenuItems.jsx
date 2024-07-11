import { dashboard, expenses, trend } from "../Icons/Icons"

export const MenuItems = [
    {
        id: 1,
        title: 'Dashboard',
        icon: dashboard,
        link: '/dashboard'
    },
    {
        id: 2,
        title: 'Income',
        icon: trend,
        link: '/income'
    },
    {
        id: 3,
        title: 'Expense',
        icon: expenses,
        link: '/expense'
    },
]