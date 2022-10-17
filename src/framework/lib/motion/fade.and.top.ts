export function fadeAndTop(duration: number = 0.3) {
    return {
        from: {
            translateY: '20px',
            opacity: 0,
            transition: {
                type: 'easeInOut',
                duration: duration
            }
        },
        to: {
            translateY: '0px',
            opacity: 1,
            transition: {
                type: 'easeInOut',
                duration: duration
            }
        }
    };
}
