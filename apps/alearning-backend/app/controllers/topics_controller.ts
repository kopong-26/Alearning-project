import type { HttpContext } from '@adonisjs/core/http'

import Topic from "#models/topic";
import { escapeLike } from '../utils/textUtil.js';



export default class TopicsController {
    async getTopic({request}:HttpContext){
        const {search}: Record<string, string | undefined> = request.all()
        const query = Topic.query()

        let searchContain = (search ?? '')
        searchContain = escapeLike(searchContain.trim())

        // if not trim before when " " is true
        // if not escapeLike brefore, it can't pass % like string. it will sql inject.
        if(searchContain) {
            query.whereILike('name', `${searchContain}%`)
        }
        
        return query.exec()
    }

    // {"name": ""}
    async createTopic({request, response}:HttpContext){
        const body = request.body()
        const newTopic = await Topic.create(body)
        response.created(newTopic)
    }
}