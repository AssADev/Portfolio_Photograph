export const splitLetters = (text, dataset = false) => {
	if (!text) return text;

	const output = text.split('<br/>').map((line) => {
		return line
		.split('')
		.map((letter) => `<span style="display:inline-block" class="letter" role="none" aria-hidden="true"${dataset ? ` data-letter="${letter}"` : ''}>${letter === ' ' ? '&nbsp;' : letter}</span>`)
		.join('');
	}).join('<br/>');

	return output;
};

export const splitWords = (text) => {
	if (!text) return text;
	return text
		.replace('<br>', ' <br> ')
		.split(' ')
		.map((word) => {
			return `<span class="word" style="display: inline-block;" role="none">${word}</span>`;
		})
		.join(' ');
};

export const splitLines = (wrapper, addWrapper = false, offset = 0, addBottomPadding = false) => {
	let content = wrapper.dataset.content;
	if (!content) {
		content = wrapper.innerHTML;
		wrapper.dataset.content = content;
	}
	
	if (!content) return [];

	const useAriaLabel = !['div', 'p'].includes(wrapper.tagName.toLowerCase());

	const createLine = () => {
		const line = document.createElement('span');
		line.classList.add('line');
		line.setAttribute('aria-hidden', 'true');
		line.setAttribute('role', 'none');
		line.style.display = 'block';
		return line;
	};

	const createWord = (text) => {
		const span = document.createElement('span');
		span.style.display = 'inline-block';
		if (addBottomPadding) span.style.paddingBottom = '0.04em';

		span.innerHTML = text;
		span.classList.add('word');
		span.setAttribute('aria-hidden', 'true');
		span.setAttribute('role', 'none');
		wrapper.appendChild(span);
		return span;
	};

	wrapper.innerHTML = content;
	const ariaText = wrapper.innerText;
	if (!wrapper.hasAttribute('aria-label') && useAriaLabel) wrapper.setAttribute('aria-label', wrapper.innerText);

	const wrapperWidth = wrapper.getBoundingClientRect().width + offset;
	wrapper.innerHTML = '';

	const lines = [];
	if (!useAriaLabel) {
		const span = document.createElement('span');
		span.classList.add('aria-text');
		span.innerText = ariaText;
		wrapper.appendChild(span);
	}

	content.split('<br>').map((block) => {
		let line = createLine();
		let lineWidth = 0;

		block.split(' ').forEach((word, i) => {
			const wordSpan = createWord((i > 0 ? ' ' : '') + word);
			let wordWidth = wordSpan.getBoundingClientRect().width;
			if (lineWidth + wordWidth > wrapperWidth) {
				wordSpan.innerHTML = wordSpan.innerText.trim();
				wordWidth = wordSpan.getBoundingClientRect().width;
				lines.push(line);
				line = createLine();
				lineWidth = 0;
			}
			lineWidth += wordWidth;
			line.appendChild(wordSpan);
		});

		if (line.children.length > 0) {
			lines.push(line);
		}

		lines.forEach((line) => {
			if (addWrapper) {
				const w = document.createElement('span');
				w.classList.add('line-wrapper');
				w.setAttribute('aria-hidden', 'true');
				w.setAttribute('role', 'none');
				w.style.display = 'block';
				w.appendChild(line);
				wrapper.appendChild(w);
			} else {
				wrapper.appendChild(line);
			}
		});
	});

	return lines;
};