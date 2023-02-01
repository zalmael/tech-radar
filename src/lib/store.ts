import {writable} from "svelte/store";
import type {Item} from "./type";
import {levels, quarters} from "./type";


function listToTrapeze(list: Item[], initialLength = 1) {
    let length = initialLength;
    let current = [];
    const result = []
    list.forEach(value => {
        if (length === current.length) {
            result.push(current)
            current = []
            length += 1
        }
        current.push(value)
    })
    result.push(current)
    return result
}

function getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

function formToCoordinate(form: Item[][]) {
    const hSize = form.length
    form.forEach((row, rowIndex) => {
        const wSize = row.length
        row.forEach((item, index) => {
            item.x = (index + 1 / 2 + getRandomArbitrary(-1 / 8, 1 / 8)) / wSize
            item.y = (rowIndex + 1 / 2 + +getRandomArbitrary(-1 / 8, 1 / 8)) / hSize
        })
    })
}

function generatePoints(list: Item[]) {
    quarters.map(quarter => levels.map(level => [quarter, level])).flat()
        .forEach(([quarter, level]) => {
            const filtered = list.filter(value => value.quarter === quarter && value.level === level)
            if (filtered.length > 0) {
                const form = listToTrapeze(filtered, level === 1 ? level : 3 * level)
                formToCoordinate(form)
            }
        })

}

const STORAGE_KEY = 'technos';

function persist(list: Item[]) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list))
}

function create() {

    const {subscribe, update, set} = writable(JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]') as Item[]);
    const index = writable(0)
    const selected = writable(null as Item)
    subscribe((list: Item[]) => {
        generatePoints(list)
        persist(list)
        index.update(() => {
            const last = list.reduce((previousValue, currentValue) => Math.max(previousValue, currentValue.index), 0)
            return last + 1;
        })
    })
    return {
        selected,
        index,
        items: {
            subscribe,
            set,
            add: (item: Item) => {
                update((list: Item[]) => {
                    if (list.some(value => value.name.toUpperCase() === item.name.toUpperCase() &&
                        value.level === item.level && value.quarter === item.quarter)) {
                        return list
                    }
                    return [...list, {...item}]
                })
            },
            remove: (item: Item) => {
                update((list) => list.filter(v => v.index !== item.index))
            }
        }
    };
}

const stores = create();

export const items = stores.items;
export const index = stores.index;
export const selected = stores.selected