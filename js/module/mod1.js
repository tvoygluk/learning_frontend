// C J S
const names = require('./mod2.js')

console.log(names.name); // Peter

// главаное настроить json
// если не прописать main, 
// то авоматом будет искаться индекс файл в указанной папке для импорта
// т.е в указании пути можно прописать только папку, а уже в ней либо индекс.жс будет по дефолту
// либо файл из джейсон из поля нэйм