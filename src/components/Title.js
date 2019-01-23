import React from 'react'

export default function Title({ name, title, backgroundColor="white" }) {
  return (
    <div className="row" style={{ backgroundColor: backgroundColor }}>
			<div className="col-10 mx-auto my-2 text-center text-title">
				<h2>
					{name}&nbsp;
					<span style={{ color: 'var(--bg-default)'}}>{title}</span>
				</h2>
			</div>
    </div>
  )
}
