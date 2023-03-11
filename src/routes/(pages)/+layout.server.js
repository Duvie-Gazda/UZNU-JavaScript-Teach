
import { ClientTopic } from '../../classes/ClientTopic';

export async function load() {
    // console.log(JSON.stringify(ClientTopic.get()))
    return {
        topics: JSON.stringify(ClientTopic.get())
    }
}