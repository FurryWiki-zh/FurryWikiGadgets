import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		Cancel: localize({
			en: 'Remind me later',
			'zh-hans': '暂不确认',
			'zh-hant': '暫不確認',
		}),
		Edit: localize({
			en: 'Edit',
			'zh-hans': '编辑',
			'zh-hant': '編輯',
		}),
		Help: localize({
			en: 'Learn more',
			'zh-hans': '了解详情',
			'zh-hant': '了解詳情',
		}),
		Verify: localize({
			en: 'Confirm your email address',
			'zh-hans': '确认电子邮箱',
			'zh-hant': '確認電子郵箱',
		}),
		DialogTitle: localize({
			en: 'Confirm your email address',
			'zh-hans': '完成电子邮箱确认',
			'zh-hant': '完成電子郵箱確認',
		}),
		DialogMessage: localize({
			en: 'You have logged in, but your email address has not been confirmed yet. To help reduce vandalism, you must confirm your email address before editing.',
			'zh-hans':
				'您已登录福瑞百科，但暂未确认电子邮箱。基于减少破坏的目的，在开始编辑前，您必须完成电子邮箱确认。',
			'zh-hant':
				'您已登錄福瑞百科，但暫未確認電子郵箱。基於減少破壞的目的，在開始編輯前，您必須完成電子郵箱確認。',
		}),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
