import React from 'react'
import { Button, Flex } from '@mantine/core'
import { useToggle } from '@mantine/hooks'
import { Plus } from '@phosphor-icons/react'

import AddNewCollectionModal from '../AddNewCollectionModal'

const CollectionActions = () => {
	const [newCollectionModalOpened, setNewCollectionModalOpened] = useToggle()

	return (
		<>
			<Flex className="ml-auto -mt-2" gap={12}>
				<Button
					variant="outline"
					color="gray"
					size="xs"
					leftIcon={<Plus size={16} />}
					onClick={() => setNewCollectionModalOpened(true)}
				>
					New Collection
				</Button>
			</Flex>
			<AddNewCollectionModal
				opened={newCollectionModalOpened}
				onClose={setNewCollectionModalOpened}
			/>
		</>
	)
}

export default CollectionActions
