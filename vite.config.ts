/*
 * @Author: LinRenJie xoxosos666@gmail.com
 * @Date: 2023-08-29 23:46:59
 * @Description:
 */
import react from '@vitejs/plugin-react'
import type { ConfigEnv, UserConfig } from 'vite'
import { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression'
import viteEslint from 'vite-plugin-eslint'

const viteConfig = defineConfig(({ mode }: ConfigEnv): UserConfig => {
  console.log(mode)
  return {
    plugins: [
      react(),
      viteEslint({
        failOnError: false
      }),
      // 构建压缩文件
      viteCompression({
        // 是否禁用，默认false
        disable: false,
        // 记录压缩文件及其压缩率。默认true
        verbose: true,
        // 需要使用压缩前的最小文件大小，单位字节（byte） b，1b(字节)=8bit(比特), 1KB=1024B
        threshold: 10240, // 即10kb以上即会压缩
        // 压缩算法 可选 'gzip' | 'brotliCompress' | 'deflate' | 'deflateRaw'
        algorithm: 'gzip',
        // 压缩后是否删除源文件 最好保留源文件，兼容性问题
        deleteOriginFile: false,
        // 压缩后的文件格式
        ext: '.gz'
      })
    ]
  }
})

export default viteConfig
