export enum RolesEnum {
	MEMBER = 'MEMBER',
	ADMIN = 'ADMIN',
	DEVELOPER = 'DEVELOPER',
}

export type BaseEntity = {
	id: string
	created_at: Date
	updated_at: Date
	deleted_at: Date | null
}

export type MetaDataEntity = Record<string, string> | null
