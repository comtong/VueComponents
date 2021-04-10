let a = 'abcbbcbb'
const occ = new Set();
const n = a.length
let rk = -1, ans = 0
for (let i = 0; i < n; i++) {
    if(i !=0) {
        occ.delete(a.charAt(i-1))
        console.log("0::", occ)
    }
    while(rk + 1 < n && !occ.has(a.charAt(rk+1))) {
        occ.add(a.charAt(rk+1))
        console.log("1::", occ)
        rk++
    }
    ans = Math.max(ans, rk -i +1)
    
}
console.log("TDX::", ans)