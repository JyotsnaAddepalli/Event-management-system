import { EventCategory } from "./event-category";

export class Event {

    id: number;
    eventType: string;       // Changed 'String' to 'string'
    eventTitle: string;      // Changed 'String' to 'string'
    eventAddress: string;    // Changed 'String' to 'string'
    eventDateTime: string;   // Changed 'String' to 'string'

    category: EventCategory; 

}
