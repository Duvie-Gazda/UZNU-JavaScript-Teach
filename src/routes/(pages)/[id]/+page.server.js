import { ClientTopic } from '../../../classes/ClientTopic';

export async function load({ params }) {

    return {
        topic: JSON.stringify(ClientTopic.getOne(Number.parseInt(params.id)))
    }
}