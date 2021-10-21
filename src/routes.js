import {createRouter, createWebHistory} from 'vue-router'
import TeamsList from './components/teams/TeamsList.vue';
import UserList from './components/users/UsersList.vue';
import TeamMember from './components/teams/TeamMembers.vue'
import NotFound from './components/nav/NotFound.vue'

const router = createRouter({
    history:createWebHistory(),
    routes:[
        // {
        //     path:'/',
        //     redirect:'/teams'
        // },
        {
            name:'team',
            path:'/teams',
            component:TeamsList,
            alias: '/',
            children:[
                {
                    name: 'team-member',
                    path:':teamId',
                    component:TeamMember,
                    props: true
                },
            ]
        },
        {
            path:'/users',
            component:UserList
        },
        
        {
            path: '/:notFount(.*)',
            component: NotFound
        }
    ],
    linkActiveClass:'route-active'
})

export {router}
