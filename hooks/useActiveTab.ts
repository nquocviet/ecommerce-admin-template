import { Dispatch, SetStateAction, useEffect } from 'react'
import { useRouter } from 'next/router'

import useDidMountEffect from './useDidMountEffect'

const useActiveTab = (
	activeTab: string | null,
	setActiveTab: Dispatch<SetStateAction<typeof activeTab>>
) => {
	const router = useRouter()

	useEffect(() => {
		const paramsString = window.location.search
		if (!paramsString) return

		const searchParams = new URLSearchParams(paramsString)
		const tab = searchParams.get('tab')

		if (tab) setActiveTab(tab.toUpperCase())
	}, [setActiveTab])

	useDidMountEffect(() => {
		if (!activeTab) return

		const query = {
			...router.query,
			tab: activeTab.toLowerCase(),
		}
		const searchParams = new URLSearchParams(query).toString()

		router.push(`?${searchParams}`, undefined, { shallow: false })
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeTab])
}

export default useActiveTab
