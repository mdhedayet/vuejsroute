import {createRouter, createWebHistory} from 'vue-router'
import TeamsList from './components/teams/TeamsList.vue';
import UserList from './components/users/UsersList.vue';
import TeamMember from './components/teams/TeamMembers.vue'
import NotFound from './components/nav/NotFound.vue'
import TeamsFooter from './components/teams/TeamsFooter.vue'
import UsersFooter from './components/users/UsersFooter.vue'

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
            components:{default:TeamsList, footer:TeamsFooter},
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
            components:{default:UserList, footer:UsersFooter},
        },
        
        {
            path: '/:notFount(.*)',
            component: NotFound
        }
    ],
    linkActiveClass:'route-active',

    scrollBehavior (_, _2, savedPosition) {
        //console.log(to,from,savedPosition);
        if(savedPosition){
            return savedPosition;
        }
        return {left:0,top: 0}
      }

})

router.beforeEach(function(to, from, next){
    console.log('Global beforech');
    console.log(to,from);
    next();
})

export {router}
