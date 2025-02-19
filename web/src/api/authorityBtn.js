import service from '@/utils/request'

export const getAuthorityBtnApi = (data) => {
  return service({
    url: '/sspaas/v2/authorityBtn/getAuthorityBtn',
    method: 'post',
    data
  })
}

export const setAuthorityBtnApi = (data) => {
  return service({
    url: '/sspaas/v2/authorityBtn/setAuthorityBtn',
    method: 'post',
    data
  })
}

export const canRemoveAuthorityBtnApi = (params) => {
  return service({
    url: '/sspaas/v2/authorityBtn/canRemoveAuthorityBtn',
    method: 'post',
    params
  })
}
