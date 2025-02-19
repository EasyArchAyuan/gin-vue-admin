import service from '@/utils/request'
// @Tags systrm
// @Summary 获取配置文件内容
// @Security ApiKeyAuth
// @Produce  application/json
// @Success 200 {string} string "{"success":true,"data":{},"msg":"返回成功"}"
// @Router /system/getSystemConfig [post]
export const getSystemConfig = () => {
  return service({
    url: '/sspaas/v2/system/getSystemConfig',
    method: 'post'
  })
}

// @Tags system
// @Summary 设置配置文件内容
// @Security ApiKeyAuth
// @Produce  application/json
// @Param data body sysModel.System true
// @Success 200 {string} string "{"success":true,"data":{},"msg":"返回成功"}"
// @Router /system/setSystemConfig [post]
export const setSystemConfig = (data) => {
  return service({
    url: '/sspaas/v2/system/setSystemConfig',
    method: 'post',
    data
  })
}

// @Tags system
// @Summary 获取服务器运行状态
// @Security ApiKeyAuth
// @Produce  application/json
// @Success 200 {string} string "{"success":true,"data":{},"msg":"返回成功"}"
// @Router /system/getServerInfo [post]
export const getSystemState = () => {
  return service({
    url: '/sspaas/v2/system/getServerInfo',
    method: 'post',
    donNotShowLoading: true
  })
}

/**
 * 重启服务
 * @param data
 * @returns {*}
 */
export const reloadSystem = (data) => {
  return service({
    url: '/sspaas/v2/system/reloadSystem',
    method: 'post',
    data
  })
}
