import service from '@/utils/request'

export const preview = (data) => {
  return service({
    url: '/sspaas/v2/autoCode/preview',
    method: 'post',
    data
  })
}

export const createTemp = (data) => {
  return service({
    url: '/sspaas/v2/autoCode/createTemp',
    method: 'post',
    data
  })
}

// @Tags SysApi
// @Summary 获取当前所有数据库
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Success 200 {string} string "{"success":true,"data":{},"msg":"创建成功"}"
// @Router /autoCode/getDatabase [get]
export const getDB = (params) => {
  return service({
    url: '/sspaas/v2/autoCode/getDB',
    method: 'get',
    params
  })
}

// @Tags SysApi
// @Summary 获取当前数据库所有表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Success 200 {string} string "{"success":true,"data":{},"msg":"创建成功"}"
// @Router /autoCode/getTables [get]
export const getTable = (params) => {
  return service({
    url: '/sspaas/v2/autoCode/getTables',
    method: 'get',
    params
  })
}

// @Tags SysApi
// @Summary 获取当前数据库所有表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Success 200 {string} string "{"success":true,"data":{},"msg":"创建成功"}"
// @Router /autoCode/getColumn [get]
export const getColumn = (params) => {
  return service({
    url: '/sspaas/v2/autoCode/getColumn',
    method: 'get',
    params
  })
}

export const getSysHistory = (data) => {
  return service({
    url: '/sspaas/v2/autoCode/getSysHistory',
    method: 'post',
    data
  })
}

export const rollback = (data) => {
  return service({
    url: '/sspaas/v2/autoCode/rollback',
    method: 'post',
    data
  })
}

export const getMeta = (data) => {
  return service({
    url: '/sspaas/v2/autoCode/getMeta',
    method: 'post',
    data
  })
}

export const delSysHistory = (data) => {
  return service({
    url: '/sspaas/v2/autoCode/delSysHistory',
    method: 'post',
    data
  })
}

export const createPackageApi = (data) => {
  return service({
    url: '/sspaas/v2/autoCode/createPackage',
    method: 'post',
    data
  })
}

export const getPackageApi = () => {
  return service({
    url: '/sspaas/v2/autoCode/getPackage',
    method: 'post'
  })
}

export const deletePackageApi = (data) => {
  return service({
    url: '/sspaas/v2/autoCode/delPackage',
    method: 'post',
    data
  })
}

export const getTemplatesApi = () => {
  return service({
    url: '/sspaas/v2/autoCode/getTemplates',
    method: 'get'
  })
}

export const installPlug = (data) => {
  return service({
    url: '/sspaas/v2/autoCode/installPlug',
    method: 'post',
    data
  })
}

export const pubPlug = (params) => {
  return service({
    url: '/sspaas/v2/autoCode/pubPlug',
    method: 'post',
    params
  })
}

export const llmAuto = (data) => {
  return service({
    url: '/sspaas/v2/autoCode/llmAuto',
    method: 'post',
    data: { ...data, mode: 'ai' },
    timeout: 1000 * 60 * 10,
    loadingOption: {
      lock: true,
      fullscreen: true,
      text: `小淼正在思考，请稍候...`
    }
  })
}

export const butler = (data) => {
  return service({
    url: '/sspaas/v2/autoCode/llmAuto',
    method: 'post',
    data: { ...data, mode: 'butler' },
    timeout: 1000 * 60 * 10
  })
}


export const eye = (data) => {
  return service({
    url: '/sspaas/v2/autoCode/llmAuto',
    method: 'post',
    data: { ...data, mode: 'eye' },
    timeout: 1000 * 60 * 10
  })
}


export const addFunc = (data) => {
  return service({
    url: '/sspaas/v2/autoCode/addFunc',
    method: 'post',
    data
  })
}

export const initMenu = (data) => {
  return service({
    url: '/sspaas/v2/autoCode/initMenu',
    method: 'post',
    data
  })
}

export const initAPI = (data) => {
  return service({
    url: '/sspaas/v2/autoCode/initAPI',
    method: 'post',
    data
  })
}
