
import { ServerTopic } from '../../classes/ServerTopic';

export async function load() {
    // console.log(JSON.stringify(ClientTopic.get()))
    return {
        topics: JSON.stringify(ServerTopic.get())
    }
}