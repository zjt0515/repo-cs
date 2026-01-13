// src/app/_components/post/hooks.ts
// ...

import { isNil } from 'lodash'

/**
 * slug唯一性验证函数
 * slug创建和编辑文章时，如果slug已经被占用且不是当前文章（编辑文章）的slug时，验证失败
 * 在编辑文章时，如果slug已被占用，但是当前编辑的文章的slug，则不报错
 * @param id
 */
export const isSlugUniqueForFrontend = (id?: string) => async (val?: string | null) => {
  if (isNil(val) || !val.length) return true
  const result = await fetchApi(async (c) =>
    c.api.posts.byslug[':slug'].$get({ param: { slug: val } }),
  )
  if (!result.ok) return false
  const post = (await result.json()) as any
  if (isNil(post) || post.id === id) return true
  return false
}
/**
 * 生成react-form-hooks表单的状态
 * 目前仅传入默认数据参数到useForm,后续我们会增加一些zod验证等其它参数
 * @param params
 */
export const usePostActionForm = (params: { type: 'create' } | { type: 'update'; item: Post }) => {
  // ...
  return useForm<DeepNonNullable<PostFormData>>({
    mode: 'all',
    resolver: zodResolver(
      getPostItemRequestSchema(
        isSlugUniqueForFrontend(params.type === 'update' ? params.item.id : undefined),
      ),
    ),
    defaultValues,
  })
}
