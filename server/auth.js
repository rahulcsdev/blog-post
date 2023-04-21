import {createAuth} from '@keystone-6/auth'
import {statelessSessions} from '@keystone-6/core/session'

export const {withAuth}=createAuth({
       listKey:'User',
       identityField:'email',
       secretField:'password',
       sessionData:'id name email isAdmin',
       initFirstItem:{
        fields:['name', 'email', 'password']
       }

});

export const session = statelessSessions({
    secret: '-- EXAMPLE COOKIE SECRET; CHANGE ME --',
  });