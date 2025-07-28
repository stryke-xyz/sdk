
export const maxUint256 = 2n ** 256n - 1n
export const MIN_TICK_NUM = -887272;
export const MAX_TICK_NUM = -MIN_TICK_NUM;

const MIN_TICK = BigInt(-887272);
const MAX_TICK = BigInt(-MIN_TICK);

export function getSqrtRatioAtTick(tick: bigint) {
	const absTick = tick < 0 ? -tick : tick;
	if (absTick > MAX_TICK) throw Error("T");

	let ratio =
		(absTick & BigInt("0x1")) != BigInt(0)
			? BigInt("0xfffcb933bd6fad37aa2d162d1a594001")
			: BigInt("0x100000000000000000000000000000000");

	if ((absTick & BigInt("0x2")) != BigInt(0))
		ratio =
			(ratio * BigInt("0xfff97272373d413259a46990580e213a")) >> BigInt(128);
	if ((absTick & BigInt("0x4")) != BigInt(0))
		ratio =
			(ratio * BigInt("0xfff2e50f5f656932ef12357cf3c7fdcc")) >> BigInt(128);
	if ((absTick & BigInt("0x8")) != BigInt(0))
		ratio =
			(ratio * BigInt("0xffe5caca7e10e4e61c3624eaa0941cd0")) >> BigInt(128);
	if ((absTick & BigInt("0x10")) != BigInt(0))
		ratio =
			(ratio * BigInt("0xffcb9843d60f6159c9db58835c926644")) >> BigInt(128);
	if ((absTick & BigInt("0x20")) != BigInt(0))
		ratio =
			(ratio * BigInt("0xff973b41fa98c081472e6896dfb254c0")) >> BigInt(128);
	if ((absTick & BigInt("0x40")) != BigInt(0))
		ratio =
			(ratio * BigInt("0xff2ea16466c96a3843ec78b326b52861")) >> BigInt(128);
	if ((absTick & BigInt("0x80")) != BigInt(0))
		ratio =
			(ratio * BigInt("0xfe5dee046a99a2a811c461f1969c3053")) >> BigInt(128);
	if ((absTick & BigInt("0x100")) != BigInt(0))
		ratio =
			(ratio * BigInt("0xfcbe86c7900a88aedcffc83b479aa3a4")) >> BigInt(128);
	if ((absTick & BigInt("0x200")) != BigInt(0))
		ratio =
			(ratio * BigInt("0xf987a7253ac413176f2b074cf7815e54")) >> BigInt(128);
	if ((absTick & BigInt("0x400")) != BigInt(0))
		ratio =
			(ratio * BigInt("0xf3392b0822b70005940c7a398e4b70f3")) >> BigInt(128);
	if ((absTick & BigInt("0x800")) != BigInt(0))
		ratio =
			(ratio * BigInt("0xe7159475a2c29b7443b29c7fa6e889d9")) >> BigInt(128);
	if ((absTick & BigInt("0x1000")) != BigInt(0))
		ratio =
			(ratio * BigInt("0xd097f3bdfd2022b8845ad8f792aa5825")) >> BigInt(128);
	if ((absTick & BigInt("0x2000")) != BigInt(0))
		ratio =
			(ratio * BigInt("0xa9f746462d870fdf8a65dc1f90e061e5")) >> BigInt(128);
	if ((absTick & BigInt("0x4000")) != BigInt(0))
		ratio =
			(ratio * BigInt("0x70d869a156d2a1b890bb3df62baf32f7")) >> BigInt(128);
	if ((absTick & BigInt("0x8000")) != BigInt(0))
		ratio =
			(ratio * BigInt("0x31be135f97d08fd981231505542fcfa6")) >> BigInt(128);
	if ((absTick & BigInt("0x10000")) != BigInt(0))
		ratio =
			(ratio * BigInt("0x9aa508b5b7a84e1c677de54f3e99bc9")) >> BigInt(128);
	if ((absTick & BigInt("0x20000")) != BigInt(0))
		ratio = (ratio * BigInt("0x5d6af8dedb81196699c329225ee604")) >> BigInt(128);
	if ((absTick & BigInt("0x40000")) != BigInt(0))
		ratio = (ratio * BigInt("0x2216e584f5fa1ea926041bedfe98")) >> BigInt(128);
	if ((absTick & BigInt("0x80000")) != BigInt(0))
		ratio = (ratio * BigInt("0x48a170391f7dc42444e8fa2")) >> BigInt(128);

	if (tick > 0) ratio = maxUint256 / ratio;

	// this divides by 1<<32 rounding up to go from a Q128.128 to a Q128.96.
	// we then downcast because we know the result always fits within 160 bits due to our tick input constraint
	// we round up in the division so getTickAtSqrtRatio of the output price is always consistent
	return (
		(ratio >> BigInt(32)) +
		(ratio % (BigInt(1) << BigInt(32)) == BigInt(0) ? BigInt(0) : BigInt(1))
	);
}

