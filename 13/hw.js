// setTimeout(() => {
//     let time = 8;
//     console.log(`Прокинувся о ${time}:00`);
//     time++;
//     setTimeout(() => {
//         console.log(`Сніданок о ${time}:00`);
//         time++;
//         setTimeout(() => {
//             console.log(`English о ${time}:00`)
//             time++;
//             setTimeout(() => {
//                 console.log(`Sport о ${time}:00`)
//                 time++;
//                 setTimeout(() => {
//                     console.log(`Relax о ${time}:00`)
//                     time++;
//                     setTimeout(() => {
//                         console.log(`Dinner о ${time}:00`)
//                         time++;
//                         setTimeout(() => {
//                             console.log(`JavaScript part1 о ${time}:00`)
//                             time++;
//                             setTimeout(() => {
//                                 console.log(`JavaScript part2 о ${time}:00`)
//                                 time++;
//                                 setTimeout(() => {
//                                     console.log(`HW JavaScript о ${time}:00`)
//                                     time++;
//                                     setTimeout(() => {
//                                         console.log(`CW JavaScript о ${time}:00`)
//                                         time++;
//                                         setTimeout(() => {
//                                             console.log(`Additional JavaScript о ${time}:00`)
//                                             time++;
//                                             setTimeout(() => {
//                                                 console.log(`Relax о ${time}:00`)
//                                                 time++;
//                                                 setTimeout(() => {
//                                                     console.log(`Online lesson okten о ${time}:00`)
//                                                     time++;
//                                                 }, 1000)
//                                             }, 1000)
//                                         }, 1000)
//                                     }, 1000)
//                                 }, 1000)
//                             }, 1000)
//                         }, 1000)
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000);

new Promise((resolve, reject) => {
    setTimeout(() => {
        let time = 8;
        console.log(`Прокинувся о ${time}:00`);
        time++;
        resolve(time);
    }, 800);
}).then(time => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Сніданок о ${time}:00`);
            time++;
            resolve(time);
        }, 800);
    })
}).then(time => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`English о ${time}:00`);
            time++;
            resolve(time);
        }, 800);
    })
}).then(time => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Sport о ${time}:00`);
            time++;
            resolve(time);
        }, 800);
    })
}).then(time => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Relax о ${time}:00`);
            time++;
            resolve(time);
        }, 800);
    })
}).then(time => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Dinner о ${time}:00`);
            time++;
            resolve(time);
        }, 800);
    })
}).then(time => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`JavaScript part1 о ${time}:00`);
            time++;
            resolve(time);
        }, 800);
    })
}).then(time => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`JavaScript part2 о ${time}:00`);
            time++;
            resolve(time);
        }, 800);
    })
}).then(time => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`HW JavaScript о ${time}:00`);
            time++;
            resolve(time);
        }, 800);
    })
}).then(time => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`CW JavaScript о ${time}:00`);
            time++;
            resolve(time);
        }, 800);
    })
}).then(time => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Additional JavaScript о ${time}:00`);
            time++;
            resolve(time);
        }, 800);
    })
}).then(time => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Relax о ${time}:00`);
            time++;
            resolve(time);
        }, 800);
    })
}).then(time => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Online lesson okten о ${time}:00`);
            time++;
            resolve(time);
        }, 800);
    })
});