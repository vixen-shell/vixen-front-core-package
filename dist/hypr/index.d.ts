type EventId = 'workspace' | 'focusedmon' | 'activewindow' | 'fullscreen' | 'monitorremoved' | 'monitoradded' | 'createworkspace' | 'destroyworkspace' | 'moveworkspace' | 'activelayout' | 'openwindow' | 'closewindow' | 'movewindow' | 'openlayer' | 'closelayer' | 'submap' | 'changefloatingmode' | 'urgent' | 'minimize' | 'screencast' | 'windowtitle';
export declare namespace Hypr {
    function addEventListener(eventIds: (EventId | 'all') | EventId[], listener: (data: object) => any): void;
    function removeEventListener(eventIds: (EventId | 'all') | EventId[], listener: (data: object) => any): void;
    function startEventsListening(): void;
    function stopEventsListening(): void;
}
export {};
