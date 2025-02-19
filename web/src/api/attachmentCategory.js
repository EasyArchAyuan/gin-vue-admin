import service from '@/utils/request'
// 分类列表
export const getCategoryList = () => {
    return service({
        url: '/sspaas/v2/attachmentCategory/getCategoryList',
        method: 'get',
    })
}

// 添加/编辑分类
export const addCategory = (data) => {
    return service({
        url: '/sspaas/v2/attachmentCategory/addCategory',
        method: 'post',
        data
    })
}

// 删除分类
export const deleteCategory = (data) => {
    return service({
        url: '/sspaas/v2/attachmentCategory/deleteCategory',
        method: 'post',
        data
    })
}
