import { readFile } from 'node:fs'
import fs from 'node:fs'

export function config ({path = '.env'} = {}){

try{
    const env = fs.readFile(path, 'utf8')
    const lines = env.split('\n')

    lines.forEach(line => {
        const [key, ...value] = line.split('=')
        const joinedValue = value.join('=')

        const hasQuotes = joinedValue.startWith('"') && joinedValue.endWith('"')

        const valueToStore = hasQuotes
        ? joinedValue.slice(1,-1)
        : joinedValue

        process.end[key] = valueToStore
        
    });
}catch (error){
    console.error(error)
}

const dotenv = {
    config
}
}