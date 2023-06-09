import { BaseEntity, MetaDataEntity } from './common'
import { ProductCollectionEntity } from './product'

export type CollectionEntity = BaseEntity & {
	title: string
	handle: string
	products: ProductCollectionEntity[]
}

export type CollectionDetailsEntity = BaseEntity & {
	title: string
	handle: string
	metadata: MetaDataEntity
	products: ProductCollectionEntity[]
}
