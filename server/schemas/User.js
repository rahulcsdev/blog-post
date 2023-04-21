import {list} from '@keystone-6/core'
import {text,password,relationship, checkbox} from '@keystone-6/core/fields'
import {allowAll} from '@keystone-6/core/access'
import {session} from '../auth'

const isAdmin=({session})=>session?.data.isAdmin;
const id=({session})=>session?.data.id

export const User=list({
    access:allowAll,
    fields:{
        name:text({validation:{isRequired:true}}),
        email:text({validation:{isRequired:true},isIndexed:'unique'}),
        password:password({validation:{isRequired:true}}), 
        post:relationship({ref:'Post.author',many:true}),
        isAdmin:checkbox()
    },
  
})