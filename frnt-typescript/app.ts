// https://www.typescriptlang.org/docs/handbook/basic-types.html
// https://yamoo9.gitbook.io/typescript/types/never
// https://ui.toast.com/posts/ko_20220323 

function generateError(msg: string, code: number): never {
    throw { msg: msg, code: code };
}

const result = generateError('An error occurre!', 500)
console.log(result)

console.log('end..')