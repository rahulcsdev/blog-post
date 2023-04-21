import {config} from '@keystone-6/core'
import { User } from './schemas/User'
import { Post } from './schemas/Post'
import { withAuth } from './auth'
import {session} from './auth'
export default withAuth(
    config({
        server:{
            cors:{origin:['http://localhost:3001'],credentials:true}
        },
        db:{
            provider:"sqlite",
            url:"file:./keystone.db"
        },
        session,
        lists:{
            User,
            Post
        }
    })
)