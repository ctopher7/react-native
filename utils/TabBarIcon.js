import Feather from 'react-native-vector-icons/Feather'
const dict = [
    {key:'Feather',lib:Feather}
]

export const TabBarIcon =async (library,name,size)=>{
    const find = dict.find(item=>item.key==library)
    const icon =await find.lib.getImageSource(name, size,'lightgrey')
    return icon
}