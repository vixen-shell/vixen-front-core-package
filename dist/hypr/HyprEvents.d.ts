declare class EventAccumulator {
    id: string;
    private _eventStatus;
    private _data;
    private _listeners;
    constructor(id: string, eventIds: string[]);
    private get _state();
    private _reset;
    private _getEventListenerIndex;
    has(eventId: string): boolean;
    update(eventId: string, data: {}): void;
    addListener(listener: (data: object) => any): void;
    removeListener(listener: (data: object) => any): void;
}
declare class HyprEventsHandler {
    private _webSocket;
    private _listeners;
    private _eventAccumulators;
    private _getEventListenerIndex;
    addEventAccumulator(eventAccumulator: EventAccumulator): void;
    addEventListener(eventId: string, listener: (data: object) => any): void;
    removeEventListener(eventId: string, listener: (data: object) => any): void;
    startListening(): void;
    stopListening(): void;
}
declare const hyprEventsHandler: HyprEventsHandler;
export { hyprEventsHandler };
